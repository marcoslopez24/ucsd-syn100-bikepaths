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
        "name": "Library Walk Spine",
        "risk": "Dangerous",
        "score": 8.8,
        "color": "#d84b45",
        "coords": [
            [32.87955, -117.23695],
            [32.87995, -117.23708],
            [32.88038, -117.23718],
            [32.88078, -117.23732],
            [32.88114, -117.23758],
        ],
        "photo": make_placeholder_image(
            "Library Walk Spine",
            "Heavy pedestrian mixing during class changes",
            "#d84b45",
        ),
        "summary": "This route feels stressful because bikes, scooters, and pedestrians compress into the same corridor.",
        "issues": "Blind crossings, frequent crowding, and weak lane separation make quick conflicts common.",
        "improvement": "Create protected bike striping and add pavement markings before key crossings.",
        "marker": [32.88038, -117.23718],
    },
    {
        "name": "Ridge Walk Connector",
        "risk": "Use Caution",
        "score": 6.1,
        "color": "#f0a202",
        "coords": [
            [32.88218, -117.23915],
            [32.88165, -117.23898],
            [32.88105, -117.23870],
            [32.88047, -117.23838],
            [32.87996, -117.23806],
        ],
        "photo": make_placeholder_image(
            "Ridge Walk Connector",
            "Moderate conflict near turns and path merges",
            "#f0a202",
        ),
        "summary": "The connector works, but visibility drops where riders merge or turn around buildings.",
        "issues": "Sharp turning geometry and inconsistent signage make route choices unclear.",
        "improvement": "Add directional bike signage and repaint the merge area with clearer lane guidance.",
        "marker": [32.88105, -117.23870],
    },
    {
        "name": "Gilman Drive Approach",
        "risk": "Safer Route",
        "score": 3.2,
        "color": "#2a9d6f",
        "coords": [
            [32.87892, -117.23558],
            [32.87943, -117.23572],
            [32.87998, -117.23590],
            [32.88045, -117.23602],
            [32.88094, -117.23616],
        ],
        "photo": make_placeholder_image(
            "Gilman Drive Approach",
            "Wider spacing and clearer movement patterns",
            "#2a9d6f",
        ),
        "summary": "This segment feels more comfortable because travel paths are more predictable and open.",
        "issues": "There are still some conflict points, but overall spacing and sightlines are better.",
        "improvement": "Maintain the route quality and add wayfinding so more riders choose this alignment.",
        "marker": [32.87998, -117.23590],
    },
    {
        "name": "Matthews Lane Connector",
        "risk": "Use Caution",
        "score": 5.9,
        "color": "#f0a202",
        "coords": [
            [32.87985, -117.24125],
            [32.88018, -117.24092],
            [32.88058, -117.24048],
            [32.88095, -117.24002],
            [32.88134, -117.23956],
        ],
        "photo": make_placeholder_image(
            "Matthews Lane Connector",
            "Vehicle turns and bike movement compete at entries",
            "#f0a202",
        ),
        "summary": "This connector is useful, but the transitions between roadway and campus paths can feel abrupt.",
        "issues": "Turning vehicles, curb geometry, and unclear rider priority make entry points harder to read.",
        "improvement": "Add conflict-zone paint and tighter speed controls where cars cross bike movement.",
        "marker": [32.88058, -117.24048],
    },
    {
        "name": "Price Center East Link",
        "risk": "Dangerous",
        "score": 7.7,
        "color": "#d84b45",
        "coords": [
            [32.87958, -117.23742],
            [32.87995, -117.23728],
            [32.88028, -117.23705],
            [32.88058, -117.23688],
            [32.88092, -117.23679],
        ],
        "photo": make_placeholder_image(
            "Price Center East Link",
            "Dense pedestrian activity near one of campus's busiest hubs",
            "#d84b45",
        ),
        "summary": "Bike circulation gets especially tense here because riders pass directly through a busy student center zone.",
        "issues": "Pedestrian surges, stop-and-go motion, and side-entry conflicts reduce predictability.",
        "improvement": "Separate through-bike movement from plaza walking space with clearer dedicated routing.",
        "marker": [32.88028, -117.23705],
    },
]


RISK_ORDER = ["Dangerous", "Use Caution", "Safer Route"]
RISK_HELP = {
    "Dangerous": "Higher conflict, more crowding, or weaker bike protection.",
    "Use Caution": "Rideable, but still has visibility or merge concerns.",
    "Safer Route": "More comfortable route with better spacing or flow.",
}


def route_popup(route: Dict) -> str:
    return f"""
    <div style="width: 280px; font-family: Arial, sans-serif;">
      <img src="{route['photo']}" alt="{route['name']}" style="width:100%; border-radius:14px; margin-bottom:10px;" />
      <div style="font-size: 20px; font-weight: 700; margin-bottom: 4px;">{route['name']}</div>
      <div style="display:inline-block; background:{route['color']}; color:white; padding:4px 10px; border-radius:999px; font-size:12px; font-weight:700; margin-bottom:10px;">
        {route['risk']}
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
        <span style="font-size: 13px;">Dangerous</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
        <span style="width:14px; height:14px; background:#f0a202; display:inline-block; border-radius:99px;"></span>
        <span style="font-size: 13px;">Use Caution</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="width:14px; height:14px; background:#2a9d6f; display:inline-block; border-radius:99px;"></span>
        <span style="font-size: 13px;">Safer Route</span>
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
        Compare campus bike routes, flag high-conflict segments, and collect field notes in one place.
        Hover over each route for a quick label and click it to open a photo card with your observations and redesign ideas.
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


danger_count = sum(route["risk"] == "Dangerous" for route in filtered_routes)
avg_score = sum(route["score"] for route in filtered_routes) / len(filtered_routes)

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
          <div style="font-size:0.85rem; color:#475569;">High-risk segments</div>
          <div style="font-size:1.8rem; font-weight:700; color:#d84b45;">{danger_count}</div>
        </div>
        """,
        unsafe_allow_html=True,
    )
with metric_cols[2]:
    st.markdown(
        f"""
        <div class="metric-card">
          <div style="font-size:0.85rem; color:#475569;">Average risk score</div>
          <div style="font-size:1.8rem; font-weight:700; color:#0f172a;">{avg_score:.1f} / 10</div>
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
        st.markdown(
            f"""
            <div class="route-card">
              <img src="{route['photo']}" alt="{route['name']}" />
              <div class="risk-pill" style="background:{route['color']};">{route['risk']}</div>
              <h4 style="margin:0 0 0.5rem 0; color:#0f172a;">{route['name']}</h4>
              <p style="margin:0 0 0.6rem 0; color:#334155;"><b>What we think:</b> {route['summary']}</p>
              <p style="margin:0 0 0.6rem 0; color:#334155;"><b>Main issues:</b> {route['issues']}</p>
              <p style="margin:0; color:#334155;"><b>Improvement idea:</b> {route['improvement']}</p>
            </div>
            """,
            unsafe_allow_html=True,
        )


with st.expander("How to extend this with your real project data"):
    st.markdown(
        """
        1. The current route coordinates are mapped to real UCSD campus landmarks, but they are still presentation-grade paths rather than survey-grade GPS traces.
        2. Replace each route's `coords` list with denser GPS points you collect from Google Maps, a phone ride recording, or a campus GIS source.
        3. Swap the generated placeholder image in each route's `photo` field with a real image path or URL.
        4. Add more route objects to the `ROUTES` list for every segment your team evaluates.
        5. If you want true hover cards with richer content, the next step is usually moving from Folium to `pydeck`, which supports deeper tooltip customization inside Streamlit.

        Route placement for this demo was aligned to named UC San Diego campus locations including Library Walk, Geisel Library, Price Center, Matthews Lane, Gilman Drive, and Ridge Walk.
        """
    )
