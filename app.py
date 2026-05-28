import base64
from typing import Dict, List

import folium
import streamlit as st
from folium.features import DivIcon
from streamlit_folium import st_folium


st.set_page_config(
    page_title="UCSD Bike Route Safety Map",
    layout="wide",
    initial_sidebar_state="expanded",
)


def make_placeholder_image(title: str, subtitle: str, color: str) -> str:
    svg = f"""
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="{color}" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#bg)" rx="28" />
      <circle cx="110" cy="104" r="54" fill="rgba(255,255,255,0.16)" />
      <circle cx="540" cy="260" r="86" fill="rgba(255,255,255,0.08)" />
      <text x="48" y="176" font-size="36" font-family="Arial, sans-serif" fill="white" font-weight="700">
        {title}
      </text>
      <text x="48" y="218" font-size="22" font-family="Arial, sans-serif" fill="#e2e8f0">
        {subtitle}
      </text>
      <text x="48" y="308" font-size="18" font-family="Arial, sans-serif" fill="#f8fafc">
        Replace this with your route photo when it is ready.
      </text>
    </svg>
    """
    encoded = base64.b64encode(svg.encode("utf-8")).decode("utf-8")
    return f"data:image/svg+xml;base64,{encoded}"


ROUTES: List[Dict] = [
    {
        "name": "Ridgewalk near RIMAC",
        "risk": "Low",
        "score": 1.14,
        "color": "#2a9d6f",
        "coords": [
            [32.88615, -117.24190],
            [32.88603, -117.24178],
            [32.88590, -117.24166],
            [32.88572, -117.24146],
            [32.88558, -117.24131],
            [32.88542, -117.24114],
            [32.88525, -117.24098],
            [32.88508, -117.24081],
            [32.88495, -117.24067],
            [32.88485, -117.24056],
        ],
        "photo": make_placeholder_image("Ridgewalk near RIMAC", "Wide and open path with lighter surges", "#2a9d6f"),
        "summary": "Traffic patterns do not surge much during passing periods and the path is fairly wide and open.",
        "issues": "The space works relatively well, but signage could still be improved.",
        "improvement": "Add clearer bike and pedestrian wayfinding so people understand expected movement earlier.",
        "marker": [32.88525, -117.24098],
    },
    {
        "name": "Ridgewalk near New Marshall",
        "risk": "Medium",
        "score": 1.14,
        "color": "#f0a202",
        "coords": [
            [32.88445, -117.24148],
            [32.88428, -117.24134],
            [32.88412, -117.24119],
            [32.88395, -117.24106],
            [32.88378, -117.24092],
            [32.88360, -117.24077],
            [32.88340, -117.24062],
            [32.88322, -117.24047],
            [32.88308, -117.24035],
            [32.88296, -117.24024],
        ],
        "photo": make_placeholder_image("Ridgewalk near New Marshall", "Congestion near Goody's market", "#f0a202"),
        "summary": "The area outside Goody's market can get congested even though riders generally follow the posted guidance.",
        "issues": "Localized crowding near storefront activity creates friction between people walking and riding.",
        "improvement": "Strengthen lane separation and queueing space near the market frontage.",
        "marker": [32.88340, -117.24062],
    },
    {
        "name": "Sixth College",
        "risk": "High",
        "score": 10.26,
        "color": "#d84b45",
        "coords": [
            [32.88135, -117.24030],
            [32.88122, -117.24010],
            [32.88111, -117.23991],
            [32.88100, -117.23972],
            [32.88088, -117.23954],
            [32.88076, -117.23936],
            [32.88063, -117.23918],
            [32.88050, -117.23899],
            [32.88037, -117.23880],
            [32.88025, -117.23863],
        ],
        "photo": make_placeholder_image("Sixth College", "High crossing conflict and crowding", "#d84b45"),
        "summary": "This area experiences high congestion, with pedestrians and riders frequently crossing into each other's paths.",
        "issues": "The wider sidewalk attracts more micromobility riders than the narrower bike lane, increasing mixing.",
        "improvement": "Make the preferred bike route more obvious and use barriers or markings to separate flows.",
        "marker": [32.88063, -117.23918],
    },
    {
        "name": "Sun God Lawn Roundabout",
        "risk": "High",
        "score": 10.33,
        "color": "#d84b45",
        "coords": [
            [32.88085, -117.23670],
            [32.88095, -117.23656],
            [32.88106, -117.23641],
            [32.88118, -117.23625],
            [32.88128, -117.23612],
            [32.88137, -117.23600],
            [32.88145, -117.23588],
            [32.88156, -117.23575],
            [32.88167, -117.23561],
            [32.88178, -117.23548],
        ],
        "photo": make_placeholder_image("Sun God Lawn Roundabout", "Heavy foot traffic and bike-lane conflicts", "#d84b45"),
        "summary": "This location had the most foot and micromobility traffic in your study and felt consistently difficult to navigate.",
        "issues": "Intersections near the roundabout, pedestrians in the bike lane, and inconsistent roundabout use all add conflict.",
        "improvement": "Tighten roundabout rules with better markings and keep pedestrians out of the through-bike lane.",
        "marker": [32.88145, -117.23588],
    },
    {
        "name": "Main Gym",
        "risk": "High",
        "score": 15.45,
        "color": "#d84b45",
        "coords": [
            [32.87915, -117.24142],
            [32.87924, -117.24128],
            [32.87933, -117.24113],
            [32.87942, -117.24098],
            [32.87952, -117.24083],
            [32.87962, -117.24067],
            [32.87972, -117.24050],
            [32.87981, -117.24036],
            [32.87990, -117.24021],
            [32.88000, -117.24008],
        ],
        "photo": make_placeholder_image("Main Gym", "Narrowing sidewalks and blind turns", "#d84b45"),
        "summary": "The lack of a bike path, narrowing sidewalk, and blind turns create regular congestion and evasive action.",
        "issues": "Sharp turns and pinched space make riders and pedestrians react late to one another.",
        "improvement": "Create a dedicated bike path or protected channel through the pinch point.",
        "marker": [32.87972, -117.24050],
    },
    {
        "name": "Revelle",
        "risk": "High",
        "score": 10.04,
        "color": "#d84b45",
        "coords": [
            [32.87570, -117.24190],
            [32.87583, -117.24173],
            [32.87596, -117.24156],
            [32.87610, -117.24140],
            [32.87622, -117.24126],
            [32.87635, -117.24111],
            [32.87650, -117.24096],
            [32.87664, -117.24082],
            [32.87680, -117.24068],
            [32.87695, -117.24054],
        ],
        "photo": make_placeholder_image("Revelle", "Narrow sidewalk after bike path ends", "#d84b45"),
        "summary": "The bike path ends where the sidewalk narrows, forcing riders to weave through a crowded academic area.",
        "issues": "Heavy lecture traffic and the unmarked shift near Mayer Hall increase collisions and confusion.",
        "improvement": "Extend route markings through the transition and give riders a clearer dedicated alignment.",
        "marker": [32.87650, -117.24096],
    },
    {
        "name": "Library Walk",
        "risk": "Medium",
        "score": None,
        "color": "#f0a202",
        "coords": [
            [32.87955, -117.23695],
            [32.87967, -117.23699],
            [32.87981, -117.23704],
            [32.87995, -117.23708],
            [32.88009, -117.23712],
            [32.88024, -117.23715],
            [32.88038, -117.23718],
            [32.88052, -117.23722],
            [32.88065, -117.23727],
            [32.88078, -117.23732],
            [32.88090, -117.23740],
            [32.88103, -117.23749],
            [32.88114, -117.23758],
        ],
        "photo": make_placeholder_image("Library Walk", "Crowded but with more room to recover", "#f0a202"),
        "summary": "There are many pedestrians and riders here, but the space is wide enough that people usually still have room to maneuver.",
        "issues": "Close calls still happen and the area lacks stronger concrete boundaries between travel modes.",
        "improvement": "Add clearer separators and reinforce expected directions through the busiest crossings.",
        "marker": [32.88038, -117.23718],
    },
    {
        "name": "Warren Mall",
        "risk": "Low",
        "score": 0.46,
        "color": "#2a9d6f",
        "coords": [
            [32.88155, -117.23395],
            [32.88167, -117.23382],
            [32.88180, -117.23369],
            [32.88192, -117.23355],
            [32.88205, -117.23343],
            [32.88220, -117.23330],
            [32.88235, -117.23318],
            [32.88248, -117.23306],
            [32.88261, -117.23295],
            [32.88274, -117.23284],
        ],
        "photo": make_placeholder_image("Warren Mall", "Wide path with few evasive actions", "#2a9d6f"),
        "summary": "The path is very wide and evasive action is rare, so this area felt comparatively safe overall.",
        "issues": "Signage is limited, which can still leave users guessing about preferred movement.",
        "improvement": "Install simple directional signage and lane symbols without overcomplicating the space.",
        "marker": [32.88235, -117.23318],
    },
    {
        "name": "Lyman Ave",
        "risk": "Medium",
        "score": 18.45,
        "color": "#f0a202",
        "coords": [
            [32.88082, -117.23280],
            [32.88068, -117.23268],
            [32.88053, -117.23255],
            [32.88038, -117.23242],
            [32.88024, -117.23230],
            [32.88009, -117.23218],
            [32.87995, -117.23206],
            [32.87982, -117.23194],
            [32.87968, -117.23182],
            [32.87955, -117.23170],
        ],
        "photo": make_placeholder_image("Lyman Ave", "Weaving where riders merge onto the street", "#f0a202"),
        "summary": "Even with a high risk-point average, this area felt more medium risk because rider volume was lower than at the most dangerous sites.",
        "issues": "No dedicated micromobility lane forces merging, weaving, and evasive movement with pedestrians.",
        "improvement": "Create a dedicated micromobility lane or at least mark a consistent merge zone onto the street.",
        "marker": [32.87995, -117.23206],
    },
]


RISK_ORDER = ["High", "Medium", "Low"]
RISK_HELP = {
    "High": "Frequent conflict, crowding, or unsafe geometry that led your team to flag the location as a major concern.",
    "Medium": "Noticeable issues and repeated friction points, but not as consistently hazardous as the highest-risk sites.",
    "Low": "Wider, calmer, or more predictable movement with fewer close calls observed.",
}


def route_popup(route: Dict) -> str:
    score_text = f"{route['score']:.2f} risk point avg" if route["score"] is not None else "Score not listed in source PDF"
    return f"""
    <div style="width: 280px; font-family: Arial, sans-serif;">
      <img src="{route['photo']}" alt="{route['name']}" style="width:100%; border-radius:14px; margin-bottom:10px;" />
      <div style="font-size: 20px; font-weight: 700; margin-bottom: 4px;">{route['name']}</div>
      <div style="display:inline-block; background:{route['color']}; color:white; padding:4px 10px; border-radius:999px; font-size:12px; font-weight:700; margin-bottom:10px;">
        {route['risk']}
      </div>
      <div style="font-size:13px; color:#475569; margin-bottom:8px;">
        <b>Study score:</b> {score_text}
      </div>
      <div style="font-size:14px; color:#334155; margin-bottom:8px;">
        <b>What we think:</b> {route['summary']}
      </div>
      <div style="font-size:14px; color:#334155;">
        <b>How we'd improve it:</b> {route['improvement']}
      </div>
    </div>
    """


def add_legend(map_object: folium.Map) -> None:
    legend_html = """
    <div style="
        position: fixed;
        bottom: 24px;
        left: 24px;
        z-index: 9999;
        background: rgba(255,255,255,0.95);
        border: 1px solid rgba(15, 23, 42, 0.08);
        box-shadow: 0 10px 30px rgba(15,23,42,0.12);
        border-radius: 16px;
        padding: 14px 16px;
        min-width: 200px;
        font-family: Arial, sans-serif;
    ">
      <div style="font-size: 14px; font-weight: 700; margin-bottom: 10px;">Route Safety</div>
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
        <span style="width:14px; height:14px; background:#d84b45; display:inline-block; border-radius:99px;"></span>
        <span style="font-size: 13px;">High</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
        <span style="width:14px; height:14px; background:#f0a202; display:inline-block; border-radius:99px;"></span>
        <span style="font-size: 13px;">Medium</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="width:14px; height:14px; background:#2a9d6f; display:inline-block; border-radius:99px;"></span>
        <span style="font-size: 13px;">Low</span>
      </div>
    </div>
    """
    map_object.get_root().html.add_child(folium.Element(legend_html))


def build_map(routes: List[Dict]) -> folium.Map:
    ucsd_center = [32.8807, -117.2374]
    map_object = folium.Map(
        location=ucsd_center,
        zoom_start=16,
        tiles="CartoDB positron",
    )

    for route in routes:
        folium.PolyLine(
            route["coords"],
            color=route["color"],
            weight=8,
            opacity=0.9,
            tooltip=f"{route['name']} • {route['risk']}",
            popup=folium.Popup(route_popup(route), max_width=320),
        ).add_to(map_object)

        folium.CircleMarker(
            location=route["marker"],
            radius=7,
            color="#ffffff",
            weight=2,
            fill=True,
            fill_color=route["color"],
            fill_opacity=1,
            tooltip=f"{route['name']} detail point",
            popup=folium.Popup(route_popup(route), max_width=320),
        ).add_to(map_object)

        label = route["name"].replace(" ", "<br>")
        folium.Marker(
            route["coords"][0],
            icon=DivIcon(
                icon_size=(120, 36),
                icon_anchor=(0, 0),
                html=f"""
                <div style="
                    font-size: 11px;
                    font-weight: 700;
                    color: #0f172a;
                    background: rgba(255,255,255,0.85);
                    border-radius: 10px;
                    padding: 6px 8px;
                    box-shadow: 0 6px 18px rgba(15,23,42,0.14);
                    backdrop-filter: blur(4px);
                    width: max-content;
                ">
                    {label}
                </div>
                """,
            ),
        ).add_to(map_object)

    add_legend(map_object)
    return map_object


st.markdown(
    """
    <style>
      .stApp {
        background:
          radial-gradient(circle at top left, rgba(41, 128, 185, 0.16), transparent 28%),
          radial-gradient(circle at top right, rgba(42, 157, 111, 0.14), transparent 24%),
          linear-gradient(180deg, #f7fbff 0%, #eef5f4 100%);
      }
      .block-container {
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
      .hero {
        background: linear-gradient(135deg, #0f172a 0%, #16324f 55%, #1f6f78 100%);
        border-radius: 24px;
        padding: 1.6rem 1.8rem;
        color: white;
        box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
        margin-bottom: 1.2rem;
      }
      .hero h1 {
        margin: 0 0 0.35rem 0;
        font-size: 2.2rem;
      }
      .hero p {
        margin: 0;
        color: rgba(255,255,255,0.86);
        max-width: 780px;
      }
      .metric-card {
        background: rgba(255,255,255,0.82);
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 18px;
        padding: 0.9rem 1rem;
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
      }
      .route-card {
        background: rgba(255,255,255,0.88);
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 22px;
        padding: 1rem;
        box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
        margin-bottom: 1rem;
      }
      .route-card img {
        border-radius: 16px;
        margin-bottom: 0.9rem;
      }
      .risk-pill {
        display: inline-block;
        padding: 0.25rem 0.7rem;
        border-radius: 999px;
        color: white;
        font-size: 0.78rem;
        font-weight: 700;
        margin-bottom: 0.65rem;
      }
    </style>
    """,
    unsafe_allow_html=True,
)


st.markdown(
    """
    <section class="hero">
      <h1>UCSD Bike Route Safety Dashboard</h1>
      <p>
        Explore your team's UCSD field-study locations, compare risk levels across campus, and present the reasoning behind each assessment.
        Hover over each route for a quick label and click it to open the score, findings, and redesign ideas.
      </p>
    </section>
    """,
    unsafe_allow_html=True,
)


st.sidebar.header("Map Controls")
selected_risks = st.sidebar.multiselect(
    "Show route categories",
    options=RISK_ORDER,
    default=RISK_ORDER,
)
selected_route_name = st.sidebar.selectbox(
    "Highlight a route",
    options=["All routes"] + [route["name"] for route in ROUTES],
)
st.sidebar.markdown("### Rating guide")
for risk in RISK_ORDER:
    st.sidebar.markdown(f"**{risk}**")
    st.sidebar.caption(RISK_HELP[risk])


filtered_routes = [route for route in ROUTES if route["risk"] in selected_risks]
if selected_route_name != "All routes":
    filtered_routes = [route for route in filtered_routes if route["name"] == selected_route_name]

if not filtered_routes:
    st.warning("No routes match the current filter. Try re-enabling one of the safety categories in the sidebar.")
    st.stop()


high_count = sum(route["risk"] == "High" for route in filtered_routes)
scored_routes = [route["score"] for route in filtered_routes if route["score"] is not None]
avg_score = sum(scored_routes) / len(scored_routes) if scored_routes else 0.0

metric_cols = st.columns(3)
with metric_cols[0]:
    st.markdown(
        f"""
        <div class="metric-card">
          <div style="font-size:0.85rem; color:#475569;">Routes in view</div>
          <div style="font-size:1.8rem; font-weight:700; color:#0f172a;">{len(filtered_routes)}</div>
        </div>
        """,
        unsafe_allow_html=True,
    )
with metric_cols[1]:
    st.markdown(
        f"""
        <div class="metric-card">
          <div style="font-size:0.85rem; color:#475569;">High-risk locations</div>
          <div style="font-size:1.8rem; font-weight:700; color:#d84b45;">{high_count}</div>
        </div>
        """,
        unsafe_allow_html=True,
    )
with metric_cols[2]:
    st.markdown(
        f"""
        <div class="metric-card">
          <div style="font-size:0.85rem; color:#475569;">Average study score</div>
          <div style="font-size:1.8rem; font-weight:700; color:#0f172a;">{avg_score:.2f}</div>
        </div>
        """,
        unsafe_allow_html=True,
    )


map_col, detail_col = st.columns([1.75, 1], gap="large")

with map_col:
    st.subheader("Interactive Campus Map")
    st.caption("Hover for route labels. Click a route or detail point to open the observation card.")
    map_object = build_map(filtered_routes)
    st_folium(map_object, use_container_width=True, height=700)

with detail_col:
    st.subheader("Route Notes")
    st.caption("These cards mirror the popup content so your dashboard still works well before field photos are collected.")
    for route in filtered_routes:
        score_text = f"{route['score']:.2f} risk point avg" if route["score"] is not None else "Not listed in the PDF"
        st.markdown(
            f"""
            <div class="route-card">
              <img src="{route['photo']}" alt="{route['name']}" />
              <div class="risk-pill" style="background:{route['color']};">{route['risk']}</div>
              <h4 style="margin:0 0 0.5rem 0; color:#0f172a;">{route['name']}</h4>
              <p style="margin:0 0 0.6rem 0; color:#475569;"><b>Study score:</b> {score_text}</p>
              <p style="margin:0 0 0.6rem 0; color:#334155;"><b>What we think:</b> {route['summary']}</p>
              <p style="margin:0 0 0.6rem 0; color:#334155;"><b>Main issues:</b> {route['issues']}</p>
              <p style="margin:0; color:#334155;"><b>Improvement idea:</b> {route['improvement']}</p>
            </div>
            """,
            unsafe_allow_html=True,
        )

