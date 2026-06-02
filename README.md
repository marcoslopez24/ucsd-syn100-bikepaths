# UCSD Bike Route Safety Map

This project is an interactive web map focused on bike safety at UC San Diego. It combines official campus-area bikeway data with team safety assessments to show where routes feel high, medium, or low risk.

The site is designed as a presentation-friendly dashboard where viewers can explore the campus bikeway network, filter route types, and connect assessment notes to specific locations on the map.

## Project overview

- Official SANDAG bikeway data is used as the base route network
- Team assessment locations are shown as color-coded risk markers
- Notes summarize the main issues, risk level, and suggested improvements for each studied location
- The site is built as a static web app for easy public viewing through GitHub Pages

## Main files

- `index.html`: page structure
- `styles.css`: site styling
- `map-data.js`: campus route and feature data
- `app.js`: MapLibre map logic and UI behavior
- `sandag_bikeways_ucsd.geojson`: official campus-clipped bikeway layer
