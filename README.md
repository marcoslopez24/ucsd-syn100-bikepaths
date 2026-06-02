# UCSD Bike Route Safety Map

This project runs as a static MapLibre web app with a public no-login basemap, so viewers can open it without a token prompt.

## Run locally

From this folder, start a simple local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish

Because this is a static site, it can be deployed directly with GitHub Pages from the repository root.

## Main files

- `index.html`: page structure
- `styles.css`: site styling
- `map-data.js`: campus route and feature data
- `app.js`: MapLibre map logic and UI behavior
- `sandag_bikeways_ucsd.geojson`: official campus-clipped bikeway layer
