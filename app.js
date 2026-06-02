const riskCheckboxes = Array.from(document.querySelectorAll('.filter-group input[type="checkbox"][value]'));
const toggle3d = document.getElementById("toggle-3d");
const toggleBikeLanes = document.getElementById("toggle-bike-lanes");
const toggleBikeRoutes = document.getElementById("toggle-bike-routes");
const toggleMultiUse = document.getElementById("toggle-multi-use");
const routeCards = document.getElementById("route-cards");
const presentNextButton = document.getElementById("present-next");
const clearFocusButton = document.getElementById("clear-focus");
const fitAllButton = document.getElementById("fit-all");
const spotlightCard = document.getElementById("spotlight-card");
const spotlightTitle = document.getElementById("spotlight-title");
const spotlightRisk = document.getElementById("spotlight-risk");
const spotlightMeta = document.getElementById("spotlight-meta");
const spotlightSummary = document.getElementById("spotlight-summary");

const statRoutes = document.getElementById("stat-routes");
const statHigh = document.getElementById("stat-high");
const statScore = document.getElementById("stat-score");
const statFeatures = document.getElementById("stat-features");

const riskColors = {
  High: "#d84b45",
  Medium: "#f0a202",
  Low: "#2a9d6f"
};

const baseStyle = {
  version: 8,
  sources: {
    "osm-raster": {
      type: "raster",
      tiles: [
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      ],
      tileSize: 256,
      attribution: "&copy; OpenStreetMap contributors"
    }
  },
  layers: [
    {
      id: "osm-raster",
      type: "raster",
      source: "osm-raster"
    }
  ]
};

let map;
let sandagBikeways = null;
let popup;
let hoveredNetworkId = null;
let networkHandlersBound = false;
let activeAssessmentName = null;
let hoveredAssessmentName = null;
let presentationIndex = -1;

function toLngLat(coords) {
  return coords.map(([lat, lon]) => [lon, lat]);
}

function getActiveRisks() {
  return riskCheckboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
}

function getFilteredAssessments() {
  const risks = new Set(getActiveRisks());
  return MAP_DATA.ASSESSMENTS.filter((assessment) => risks.has(assessment.risk));
}

function getSortedAssessments(assessments) {
  const riskOrder = { High: 0, Medium: 1, Low: 2 };
  return [...assessments].sort((a, b) => {
    const byRisk = riskOrder[a.risk] - riskOrder[b.risk];
    if (byRisk !== 0) {
      return byRisk;
    }
    return (b.score ?? -Infinity) - (a.score ?? -Infinity);
  });
}

function getVisibleNetworkClasses() {
  return {
    "Bike Lane": toggleBikeLanes.checked,
    "Bike Route": toggleBikeRoutes.checked,
    "Multi-Use Path": toggleMultiUse.checked
  };
}

function anyNetworkLayerVisible() {
  const visibleClasses = getVisibleNetworkClasses();
  return Object.values(visibleClasses).some(Boolean);
}

async function loadSandagBikeways() {
  if (sandagBikeways) {
    return sandagBikeways;
  }

  const response = await fetch("./sandag_bikeways_ucsd.geojson");
  sandagBikeways = await response.json();
  return sandagBikeways;
}

function midpoint(coords) {
  if (!coords?.length) {
    return null;
  }

  return coords[Math.floor(coords.length / 2)];
}

function getAssessmentFocusCoord(assessment) {
  if (assessment.focus?.center) {
    return assessment.focus.center;
  }

  if (assessment.focusPath?.length) {
    return midpoint(assessment.focusPath);
  }

  for (const routeName of assessment.linkedRoutes) {
    const route = MAP_DATA.ROUTES.find((item) => item.name === routeName);
    if (!route) {
      continue;
    }

    if (route.marker) {
      return route.marker;
    }

    if (route.coords?.length) {
      return midpoint(route.coords);
    }
  }

  return null;
}

function buildAssessmentFocusFeatures() {
  return {
    type: "FeatureCollection",
    features: MAP_DATA.ASSESSMENTS.flatMap((assessment) => {
      const coord = getAssessmentFocusCoord(assessment);
      if (!coord) {
        return [];
      }

      return [{
        type: "Feature",
        id: `${assessment.name}-focus-point`,
        geometry: {
          type: "Point",
          coordinates: [coord[1], coord[0]]
        },
        properties: {
          assessmentName: assessment.name,
          risk: assessment.risk,
          color: riskColors[assessment.risk] || "#0f172a"
        }
      }];
    })
  };
}

function formatRoadName(name) {
  if (!name) {
    return "Campus bikeway segment";
  }

  return name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function networkPopupHtml(properties) {
  const typeLabel = properties.Route_Class_Name === "Bike Lane"
    ? "Bike lane"
    : properties.Route_Class_Name === "Bike Route"
      ? "Bike route"
      : "Multi use path";
  const miles = typeof properties.length_miles === "number" ? `${properties.length_miles.toFixed(2)} mi` : "Length not listed";

  return `
    <div class="popup-card">
      <h3>${typeLabel}</h3>
      <p><strong>Street or path:</strong> ${formatRoadName(properties.RD20FULL)}</p>
      <p><strong>Segment length:</strong> ${miles}</p>
    </div>
  `;
}

function assessmentPopupHtml(assessment) {
  const score = assessment.score === null ? "Not listed in the source PDF" : `${assessment.score.toFixed(2)} risk point avg`;

  return `
    <div class="popup-card">
      <h3>${assessment.name}</h3>
      <p><strong>Risk:</strong> ${assessment.risk}</p>
      <p><strong>Study score:</strong> ${score}</p>
      <p>${assessment.summary}</p>
    </div>
  `;
}

function updateSpotlight() {
  const primaryName = hoveredAssessmentName || activeAssessmentName;
  const assessment = primaryName
    ? MAP_DATA.ASSESSMENTS.find((item) => item.name === primaryName)
    : null;

  if (!assessment) {
    spotlightCard.classList.add("hidden");
    return;
  }

  const score = assessment.score === null ? "Score not listed" : `Study score ${assessment.score.toFixed(2)}`;
  spotlightCard.classList.remove("hidden");
  spotlightTitle.textContent = assessment.name;
  spotlightRisk.textContent = assessment.risk;
  spotlightRisk.style.background = riskColors[assessment.risk] || "#0f172a";
  spotlightMeta.textContent = score;
  spotlightSummary.textContent = assessment.summary;
}

function ensureMap() {
  if (map) {
    return map;
  }

  map = new maplibregl.Map({
    container: "map",
    style: baseStyle,
    center: [-117.2391, 32.8789],
    zoom: 15.8,
    pitch: 28,
    bearing: -8
  });

  map.addControl(new maplibregl.NavigationControl(), "top-right");
  map.addControl(new maplibregl.FullscreenControl(), "top-right");
  map.addControl(new maplibregl.ScaleControl({ unit: "imperial" }), "bottom-right");
  popup = new maplibregl.Popup({ closeButton: false, closeOnClick: false, maxWidth: "280px" });

  map.on("load", async () => {
    const sandagData = await loadSandagBikeways();
    map.addSource("campus-network", { type: "geojson", data: sandagData, generateId: true });
    map.addSource("assessment-focus", { type: "geojson", data: buildAssessmentFocusFeatures() });

    map.addLayer({
      id: "campus-network-multi",
      type: "line",
      source: "campus-network",
      filter: ["==", ["get", "Route_Class_Name"], "Multi-Use Path"],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      paint: {
        "line-color": "#f48253",
        "line-width": 5,
        "line-opacity": 0.72
      }
    });

    map.addLayer({
      id: "campus-network-lane",
      type: "line",
      source: "campus-network",
      filter: ["==", ["get", "Route_Class_Name"], "Bike Lane"],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      paint: {
        "line-color": "#0197c4",
        "line-width": 5,
        "line-opacity": 0.72
      }
    });

    map.addLayer({
      id: "campus-network-route",
      type: "line",
      source: "campus-network",
      filter: ["==", ["get", "Route_Class_Name"], "Bike Route"],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      paint: {
        "line-color": "#8bc53f",
        "line-width": 5,
        "line-opacity": 0.72
      }
    });

    map.addLayer({
      id: "campus-network-hover",
      type: "line",
      source: "campus-network",
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      paint: {
        "line-color": "#ffffff",
        "line-width": 10,
        "line-opacity": [
          "case",
          ["boolean", ["feature-state", "hover"], false],
          0.95,
          0
        ],
        "line-blur": 1
      }
    });

    map.addLayer({
      id: "assessment-focus-outline",
      type: "circle",
      source: "assessment-focus",
      filter: ["==", ["get", "assessmentName"], ""],
      paint: {
        "circle-radius": 12,
        "circle-color": "#ffffff",
        "circle-opacity": 0.95
      }
    });

    map.addLayer({
      id: "assessment-focus-dot",
      type: "circle",
      source: "assessment-focus",
      filter: ["==", ["get", "assessmentName"], ""],
      paint: {
        "circle-radius": 8,
        "circle-color": ["get", "color"],
        "circle-stroke-width": 1.5,
        "circle-stroke-color": "#ffffff",
        "circle-opacity": 0.98
      }
    });

    map.addLayer({
      id: "assessment-focus-pulse",
      type: "circle",
      source: "assessment-focus",
      filter: ["==", ["get", "assessmentName"], ""],
      paint: {
        "circle-radius": 18,
        "circle-color": ["get", "color"],
        "circle-opacity": 0.2
      }
    }, "assessment-focus-outline");

    bindNetworkInteractions();
    updateMap();
  });

  return map;
}

function bindNetworkInteractions() {
  if (networkHandlersBound) {
    return;
  }

  networkHandlersBound = true;

  ["campus-network-multi", "campus-network-lane", "campus-network-route"].forEach((layerId) => {
    map.on("mouseenter", layerId, (event) => {
      map.getCanvas().style.cursor = "pointer";
      const feature = event.features?.[0];
      if (!feature) return;
      setHoveredNetworkFeature(feature.id);
      popup
        .setLngLat(event.lngLat)
        .setHTML(networkPopupHtml(feature.properties))
        .addTo(map);
    });

    map.on("mousemove", layerId, (event) => {
      const feature = event.features?.[0];
      if (!feature) return;
      setHoveredNetworkFeature(feature.id);
      popup
        .setLngLat(event.lngLat)
        .setHTML(networkPopupHtml(feature.properties));
    });

    map.on("mouseleave", layerId, () => {
      map.getCanvas().style.cursor = "";
      clearHoveredNetworkFeature();
      popup.remove();
    });
  });

  map.on("mouseenter", "assessment-focus-dot", (event) => {
    map.getCanvas().style.cursor = "pointer";
    const feature = event.features?.[0];
    if (!feature) return;
    const assessmentName = feature.properties?.assessmentName;
    const assessment = MAP_DATA.ASSESSMENTS.find((item) => item.name === assessmentName);
    if (!assessment) return;
    setHoveredAssessment(assessmentName);
    popup
      .setLngLat(event.lngLat)
      .setHTML(assessmentPopupHtml(assessment))
      .addTo(map);
  });

  map.on("mousemove", "assessment-focus-dot", (event) => {
    const feature = event.features?.[0];
    if (!feature) return;
    const assessmentName = feature.properties?.assessmentName;
    const assessment = MAP_DATA.ASSESSMENTS.find((item) => item.name === assessmentName);
    if (!assessment) return;
    setHoveredAssessment(assessmentName);
    popup
      .setLngLat(event.lngLat)
      .setHTML(assessmentPopupHtml(assessment));
  });

  map.on("mouseleave", "assessment-focus-dot", () => {
    map.getCanvas().style.cursor = "";
    clearHoveredAssessment();
    popup.remove();
  });
}

function setHoveredNetworkFeature(featureId) {
  if (!map?.getSource("campus-network")) {
    return;
  }

  if (hoveredNetworkId !== null && hoveredNetworkId !== featureId) {
    map.setFeatureState({ source: "campus-network", id: hoveredNetworkId }, { hover: false });
  }

  hoveredNetworkId = featureId;
  map.setFeatureState({ source: "campus-network", id: featureId }, { hover: true });
}

function clearHoveredNetworkFeature() {
  if (!map?.getSource("campus-network") || hoveredNetworkId === null) {
    return;
  }

  map.setFeatureState({ source: "campus-network", id: hoveredNetworkId }, { hover: false });
  hoveredNetworkId = null;
}

function syncCardStates() {
  routeCards.querySelectorAll(".route-card").forEach((card) => {
    const assessmentName = card.dataset.assessment;
    card.classList.toggle("active", assessmentName === activeAssessmentName);
    card.classList.toggle("hovered", assessmentName === hoveredAssessmentName);
  });
  updateSpotlight();
}

function setHoveredAssessment(assessmentName) {
  if (hoveredAssessmentName === assessmentName) {
    return;
  }

  hoveredAssessmentName = assessmentName;
  syncCardStates();
}

function clearHoveredAssessment() {
  if (hoveredAssessmentName === null) {
    return;
  }

  hoveredAssessmentName = null;
  syncCardStates();
}

function updateStats(assessments) {
  const high = assessments.filter((assessment) => assessment.risk === "High").length;
  const scores = assessments.map((assessment) => assessment.score).filter((score) => score !== null);
  const avg = scores.length ? scores.reduce((sum, score) => sum + score, 0) / scores.length : 0;
  const visibleClasses = getVisibleNetworkClasses();
  const visibleSegments = sandagBikeways
    ? sandagBikeways.features.filter((feature) => visibleClasses[feature.properties?.Route_Class_Name]).length
    : 0;

  statRoutes.textContent = assessments.length;
  statHigh.textContent = high;
  statScore.textContent = avg.toFixed(2);
  statFeatures.textContent = visibleSegments;
}

function hasAssessmentMapFocus(assessment) {
  return Boolean(getAssessmentFocusCoord(assessment));
}

function renderCards(assessments) {
  const sortedAssessments = getSortedAssessments(assessments);
  routeCards.innerHTML = "";

  if (!sortedAssessments.length) {
    routeCards.innerHTML = `
      <article class="route-card">
        <h3 class="card-title">No assessment summaries match the current filters</h3>
        <p class="card-line">Try turning one of the risk categories back on.</p>
      </article>
    `;
    updateSpotlight();
    return;
  }

  sortedAssessments.forEach((assessment) => {
    const card = document.createElement("article");
    const score = assessment.score === null ? "Not listed in the source PDF" : `${assessment.score.toFixed(2)} risk point avg`;
    const riskColor = riskColors[assessment.risk] || "#0f172a";
    const hasLinkedFocus = hasAssessmentMapFocus(assessment);

    card.className = "route-card";
    card.dataset.assessment = assessment.name;
    card.innerHTML = `
      <span class="risk-pill" style="background:${riskColor};">${assessment.risk}</span>
      <h3 class="card-title">${assessment.name}</h3>
      <p class="card-line"><strong>Study score:</strong> ${score}</p>
      <p class="card-line"><strong>What we think:</strong> ${assessment.summary}</p>
      <p class="card-line"><strong>Main issues:</strong> ${assessment.issues}</p>
      <p class="card-line"><strong>Improvement idea:</strong> ${assessment.improvement}</p>
      ${hasLinkedFocus ? `
      <div class="card-actions">
        <button class="card-button focus-button" type="button" data-assessment="${assessment.name}">
          ${activeAssessmentName === assessment.name ? "Focused on map" : "Show on map"}
        </button>
      </div>` : ""}
    `;
    routeCards.appendChild(card);
  });

  routeCards.querySelectorAll(".focus-button").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveAssessment(button.dataset.assessment);
    });
  });

  syncCardStates();
}

function computeBounds() {
  if (!sandagBikeways?.features?.length) {
    return null;
  }

  const bounds = new maplibregl.LngLatBounds();
  let hasPoints = false;
  const visibleClasses = getVisibleNetworkClasses();

  const append = (lon, lat) => {
    bounds.extend([lon, lat]);
    hasPoints = true;
  };

  sandagBikeways.features.forEach((feature) => {
    if (!visibleClasses[feature.properties?.Route_Class_Name]) {
      return;
    }

    if (feature.geometry?.type === "LineString") {
      feature.geometry.coordinates.forEach(([lon, lat]) => append(lon, lat));
    }

    if (feature.geometry?.type === "MultiLineString") {
      feature.geometry.coordinates.forEach((line) => {
        line.forEach(([lon, lat]) => append(lon, lat));
      });
    }
  });

  return hasPoints ? bounds : null;
}

function getAssessmentFocusView(assessmentName) {
  const assessment = MAP_DATA.ASSESSMENTS.find((item) => item.name === assessmentName);
  if (!assessment) {
    return null;
  }

  const coord = getAssessmentFocusCoord(assessment);
  if (coord) {
    return {
      center: [coord[1], coord[0]],
      zoom: assessment.focus?.zoom ?? 17.35
    };
  }

  return null;
}

function setActiveAssessment(assessmentName) {
  activeAssessmentName = assessmentName;
  hoveredAssessmentName = null;
  updateMap();
}

function clearActiveAssessment() {
  activeAssessmentName = null;
  hoveredAssessmentName = null;
  presentationIndex = -1;
  updateMap();
}

function focusNextAssessment() {
  const candidates = getSortedAssessments(getFilteredAssessments()).filter(hasAssessmentMapFocus);
  if (!candidates.length) {
    return;
  }

  const currentIndex = candidates.findIndex((assessment) => assessment.name === activeAssessmentName);
  presentationIndex = currentIndex >= 0 ? (currentIndex + 1) % candidates.length : 0;
  setActiveAssessment(candidates[presentationIndex].name);
}

function updateMap() {
  const assessments = getFilteredAssessments();
  if (activeAssessmentName && !assessments.some((assessment) => assessment.name === activeAssessmentName)) {
    activeAssessmentName = null;
  }

  updateStats(assessments);
  renderCards(assessments);

  if (!map || !map.isStyleLoaded()) {
    return;
  }

  map.setLayoutProperty("campus-network-lane", "visibility", toggleBikeLanes.checked ? "visible" : "none");
  map.setLayoutProperty("campus-network-route", "visibility", toggleBikeRoutes.checked ? "visible" : "none");
  map.setLayoutProperty("campus-network-multi", "visibility", toggleMultiUse.checked ? "visible" : "none");
  map.setLayoutProperty("campus-network-hover", "visibility", anyNetworkLayerVisible() ? "visible" : "none");

  const focusFilter = activeAssessmentName
    ? ["==", ["get", "assessmentName"], activeAssessmentName]
    : ["==", ["get", "assessmentName"], ""];
  map.setFilter("assessment-focus-outline", focusFilter);
  map.setFilter("assessment-focus-dot", focusFilter);
  map.setFilter("assessment-focus-pulse", focusFilter);

  const focusView = activeAssessmentName ? getAssessmentFocusView(activeAssessmentName) : null;
  if (focusView?.center) {
    map.easeTo({ center: focusView.center, zoom: focusView.zoom, duration: 900 });
    return;
  }

  const bounds = computeBounds();
  if (bounds) {
    map.fitBounds(bounds, { padding: 54, duration: 700, maxZoom: 17.4 });
  }
}

function apply3DMode() {
  if (!map) return;

  if (toggle3d.checked) {
    map.easeTo({ pitch: 58, bearing: -22, duration: 900 });
    return;
  }

  map.easeTo({ pitch: 0, bearing: 0, duration: 700 });
}

[...riskCheckboxes, toggleBikeLanes, toggleBikeRoutes, toggleMultiUse].forEach((input) => {
  input.addEventListener("change", updateMap);
});

toggle3d.addEventListener("change", () => {
  if (map?.isStyleLoaded()) {
    apply3DMode();
  }
});

fitAllButton.addEventListener("click", clearActiveAssessment);
presentNextButton.addEventListener("click", focusNextAssessment);
clearFocusButton.addEventListener("click", clearActiveAssessment);

renderCards(getFilteredAssessments());
updateStats(getFilteredAssessments());
ensureMap();
