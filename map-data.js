const MAP_DATA = (() => {
  const ROUTES = [
    {
      name: "Main Gym Planned Path",
      area: "Main Gym",
      risk: "High",
      score: 15.45,
      color: "#d84b45",
      coords: [
        [32.8767722, -117.24073377],
        [32.87697988, -117.24076211],
        [32.87734864, -117.2407868],
        [32.87743802, -117.24080119],
        [32.87752088, -117.24084055],
        [32.87761488, -117.24092405],
        [32.87767815, -117.2409789],
        [32.87771298, -117.24100492],
        [32.87776364, -117.24102041],
        [32.8778073, -117.241024],
        [32.87784636, -117.24101661],
        [32.87787901, -117.24099246],
        [32.87790279, -117.24095333],
        [32.8779409, -117.24088431]
      ],
      photo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iMzYwIiB2aWV3Qm94PSIwIDAgNjQwIDM2MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiZyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q4NGI0NSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwZjE3MmEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzNjAiIGZpbGw9InVybCgjYmcpIiByeD0iMjgiIC8+PGNpcmNsZSBjeD0iMTEwIiBjeT0iMTA0IiByPSI1NCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE2KSIgLz48Y2lyY2xlIGN4PSI1NDAiIGN5PSIyNjAiIHI9Ijg2IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIiAvPjx0ZXh0IHg9IjQ4IiB5PSIxNzYiIGZvbnQtc2l6ZT0iMzYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZmlsbD0id2hpdGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk1haW4gR3ltIFBsYW5uZWQgUGF0aDwvdGV4dD48dGV4dCB4PSI0OCIgeT0iMjE4IiBmb250LXNpemU9IjIyIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZpbGw9IiNlMmU4ZjAiPktNTC1iYXNlZCByb3V0ZSBmcm9tIHlvdXIgRWFydGggcHJvamVjdDwvdGV4dD48dGV4dCB4PSI0OCIgeT0iMzA4IiBmb250LXNpemU9IjE4IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZpbGw9IiNmOGZhZmMiPlJlcGxhY2UgdGhpcyB3aXRoIHlvdXIgcm91dGUgcGhvdG8gd2hlbiBpdCBpcyByZWFkeS48L3RleHQ+PC9zdmc+",
      summary: "This segment comes directly from your mapped infrastructure proposal for the Main Gym area, where your study found the highest conflict from narrowing sidewalks and blind turns.",
      issues: "Riders lose dedicated space and face frequent evasive movement around pedestrians crossing the corridor.",
      improvement: "Use this planned alignment to create a more legible micromobility route with clearer crossing control.",
      marker: [32.87752, -117.24084055],
      related_markers: ["Pedestrian Crossing", "Yield", "Main Gym Micromobility Path"]
    },
    {
      name: "Mayer Hall Planned Painted Path",
      area: "Revelle / Mayer Hall",
      risk: "High",
      score: 10.04,
      color: "#d84b45",
      coords: [
        [32.87578782, -117.240723],
        [32.87575536, -117.24072348],
        [32.87571724, -117.24071416],
        [32.87567633, -117.24071053],
        [32.87551608, -117.24071062],
        [32.87550717, -117.24071233],
        [32.87549874, -117.24071804],
        [32.87548391, -117.2407241],
        [32.87546389, -117.24072876],
        [32.87544489, -117.24072791]
      ],
      photo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iMzYwIiB2aWV3Qm94PSIwIDAgNjQwIDM2MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiZyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q4NGI0NSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwZjE3MmEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzNjAiIGZpbGw9InVybCgjYmcpIiByeD0iMjgiIC8+PGNpcmNsZSBjeD0iMTEwIiBjeT0iMTA0IiByPSI1NCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE2KSIgLz48Y2lyY2xlIGN4PSI1NDAiIGN5PSIyNjAiIHI9Ijg2IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIiAvPjx0ZXh0IHg9IjQ4IiB5PSIxNzYiIGZvbnQtc2l6ZT0iMzYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZmlsbD0id2hpdGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk1heWVyIEhhbGwgUGxhbm5lZCBQYWludGVkIFBhdGg8L3RleHQ+PHRleHQgeD0iNDgiIHk9IjIxOCIgc3R5bGU9ImZvbnQtc2l6ZToyMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLCBzYW5zLXNlcmlmO2ZpbGw6I2UyZThmMDsiPlBhaW50ZWQgcGF0aCB0aHJvdWdoIHRoZSBSZXZlbGxlIHBpbmNoIHBvaW50PC90ZXh0Pjx0ZXh0IHg9IjQ4IiB5PSIzMDgiIHN0eWxlPSJmb250LXNpemU6MThweDtmb250LWZhbWlseTpBcmlhbCwgc2Fucy1zZXJpZjtmbGw6I2Y4ZmFmYzsiPlJlcGxhY2UgdGhpcyB3aXRoIHlvdXIgcm91dGUgcGhvdG8gd2hlbiBpdCBpcyByZWFkeS48L3RleHQ+PC9zdmc+",
      summary: "This proposed painted route targets the Revelle bottleneck where the bike path ends and riders are forced into a crowded academic space.",
      issues: "The current shift through Mayer Hall is unmarked, so riders weave through lecture traffic with limited guidance.",
      improvement: "Add a continuous painted corridor so the required lateral shift is visible well before the conflict zone.",
      marker: [32.87560052, -117.24070858],
      related_markers: ["Mayer Hall Painted Lanes", "Protected Lane to Revelle Plaza"]
    },
    {
      name: "Flex Delineator Pole Path",
      area: "Revelle Plaza Approach",
      risk: "High",
      score: 10.04,
      color: "#d84b45",
      coords: [
        [32.87514434, -117.24076703],
        [32.87510273, -117.24077786],
        [32.8750331, -117.24078226],
        [32.87496848, -117.24078077],
        [32.87489284, -117.24078122]
      ],
      photo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iMzYwIiB2aWV3Qm94PSIwIDAgNjQwIDM2MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiZyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q4NGI0NSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwZjE3MmEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzNjAiIGZpbGw9InVybCgjYmcpIiByeD0iMjgiIC8+PGNpcmNsZSBjeD0iMTEwIiBjeT0iMTA0IiByPSI1NCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE2KSIgLz48Y2lyY2xlIGN4PSI1NDAiIGN5PSIyNjAiIHI9Ijg2IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIiAvPjx0ZXh0IHg9IjQ4IiB5PSIxNzYiIGZvbnQtc2l6ZT0iMzYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZmlsbD0id2hpdGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkZsZXggRGVsaW5lYXRvciBQb2xlIFBhdGg8L3RleHQ+PHRleHQgeD0iNDgiIHk9IjIxOCIgc3R5bGU9ImZvbnQtc2l6ZToyMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLCBzYW5zLXNlcmlmO2ZpbGw6I2UyZThmMDsiPlByb3RlY3RlZCBhcHByb2FjaCBpbnRvIFJldmVsbGUgUGxhemE8L3RleHQ+PHRleHQgeD0iNDgiIHk9IjMwOCIgc3R5bGU9ImZvbnQtc2l6ZToxOHB4O2ZvbnQtZmFtaWx5OkFyaWFsLCBzYW5zLXNlcmlmO2ZpbGw6I2Y4ZmFmYzsiPlJlcGxhY2UgdGhpcyB3aXRoIHlvdXIgcm91dGUgcGhvdG8gd2hlbiBpdCBpcyByZWFkeS48L3RleHQ+PC9zdmc+",
      summary: "This short but important protected segment supports the Revelle redesign by physically clarifying where micromobility should travel.",
      issues: "Without a protected edge, people entering the plaza can drift into one another's path during busy periods.",
      improvement: "Use flexible posts and striping together so the route reads as a protected lane rather than a suggestion.",
      marker: [32.87499042, -117.24078169],
      related_markers: ["Protected Lane to Revelle Plaza"]
    },
    {
      name: "Sixth to Marshall Connector",
      area: "Sixth / Marshall Edge",
      risk: "Medium",
      score: 10.26,
      color: "#f0a202",
      coords: [
        [32.88096722, -117.24062653],
        [32.88106548, -117.24061818],
        [32.88114482, -117.24060058],
        [32.88125816, -117.24060687],
        [32.88144609, -117.24062375]
      ],
      photo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iMzYwIiB2aWV3Qm94PSIwIDAgNjQwIDM2MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiZyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YwYTAwMiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwZjE3MmEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzNjAiIGZpbGw9InVybCgjYmcpIiByeD0iMjgiIC8+PGNpcmNsZSBjeD0iMTEwIiBjeT0iMTA0IiByPSI1NCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE2KSIgLz48Y2lyY2xlIGN4PSI1NDAiIGN5PSIyNjAiIHI9Ijg2IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIiAvPjx0ZXh0IHg9IjQ4IiB5PSIxNzYiIGZvbnQtc2l6ZT0iMzYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZmlsbD0id2hpdGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlNpeHRoIHRvIE1hcnNoYWxsIENvbm5lY3RvcjwvdGV4dD48dGV4dCB4PSI0OCIgeT0iMjE4IiBzdHlsZT0iZm9udC1zaXplOjIycHg7Zm9udC1mYW1pbHk6QXJpYWwsIHNhbnMtc2VyaWY7ZmlsbDojZTJlOGYwOyI+TWFwcGVkIGNvbm5lY3RvciBiZXR3ZWVuIGNyb3dkZWQgY2FtcHVzIGVkZ2VzPC90ZXh0Pjx0ZXh0IHg9IjQ4IiB5PSIzMDgiIHN0eWxlPSJmb250LXNpemU6MThweDtmb250LWZhbWlseTpBcmlhbCwgc2Fucy1zZXJpZjtmbGw6I2Y4ZmFmYzsiPlJlcGxhY2UgdGhpcyB3aXRoIHlvdXIgcm91dGUgcGhvdG8gd2hlbiBpdCBpcyByZWFkeS48L3RleHQ+PC9zdmc+",
      summary: "This connector appears in your KML as a direct intervention between Sixth and Marshall, where rider and pedestrian paths frequently cross.",
      issues: "The surrounding zone still has heavy conflict, but a clearly designated connection could reduce ambiguity through the merge.",
      improvement: "Mark the connector boldly and pair it with yield control where it intersects crossing flows.",
      marker: [32.88114399, -117.2406004],
      related_markers: ["Yield", "Sixth to Marshall Connection", "Bike Lane Ends"]
    },
    {
      name: "Library Walk Spine Path",
      area: "Library Walk / Sun God Edge",
      risk: "Medium",
      score: null,
      color: "#f0a202",
      coords: [
        [32.88032002, -117.23730916],
        [32.88035045, -117.23708371],
        [32.8803908, -117.23680109],
        [32.88043392, -117.23664442],
        [32.88041072, -117.23642723],
        [32.88042957, -117.23634916],
        [32.88047916, -117.23622654],
        [32.88072256, -117.23594798],
        [32.88084063, -117.23580799],
        [32.88090807, -117.23572373],
        [32.88098291, -117.23567992],
        [32.88107569, -117.23564801],
        [32.88111163, -117.23562233],
        [32.88113595, -117.23558115],
        [32.88115051, -117.23548],
        [32.88116639, -117.23463385]
      ],
      photo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iMzYwIiB2aWV3Qm94PSIwIDAgNjQwIDM2MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiZyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YwYTAwMiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwZjE3MmEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzNjAiIGZpbGw9InVybCgjYmcpIiByeD0iMjgiIC8+PGNpcmNsZSBjeD0iMTEwIiBjeT0iMTA0IiByPSI1NCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE2KSIgLz48Y2lyY2xlIGN4PSI1NDAiIGN5PSIyNjAiIHI9Ijg2IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIiAvPjx0ZXh0IHg9IjQ4IiB5PSIxNzYiIGZvbnQtc2l6ZT0iMzYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZmlsbD0id2hpdGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkxpYnJhcnkgV2FsayBTcGluZSBQYXRoPC90ZXh0Pjx0ZXh0IHg9IjQ4IiB5PSIyMTgiIHN0eWxlPSJmb250LXNpemU6MjJweDtmb250LWZhbWlseTpBcmlhbCwgc2Fucy1zZXJpZjtmbGw6I2UyZThmMDsiPlByaW1hcnkgS01MIHJvdXRlIGNyb3NzaW5nIExpYnJhcnkgV2FsazwvdGV4dD48dGV4dCB4PSI0OCIgeT0iMzA4IiBzdHlsZT0iZm9udC1zaXplOjE4cHg7Zm9udC1mYW1pbHk6QXJpYWwsIHNhbnMtc2VyaWY7ZmlsbDojZjhmYWZjOyI+UmVwbGFjZSB0aGlzIHdpdGggeW91ciByb3V0ZSBwaG90byB3aGVuIGl0IGlzIHJlYWR5LjwvdGV4dD48L3N2Zz4=",
      summary: "This line captures your project's main Library Walk route, following the campus spine where the team observed crowding but also more room to recover than at the highest-risk sites.",
      issues: "The route still passes through a major pedestrian corridor and transitions toward the roundabout conflict zone.",
      improvement: "Strengthen directional markings and make the through-bike movement legible before riders enter the busiest crossings.",
      marker: [32.88072256, -117.23594798],
      related_markers: ["Alternate Path to Library Walk"]
    },
    {
      name: "Library Walk Alternate Path",
      area: "Library Walk Alternate Access",
      risk: "Medium",
      score: null,
      color: "#f0a202",
      coords: [
        [32.87708052, -117.23835647],
        [32.87820266, -117.23877641],
        [32.87829676, -117.23864601],
        [32.87841464, -117.23877116],
        [32.87883146, -117.23861983],
        [32.87931747, -117.2386352],
        [32.8802299, -117.2383702]
      ],
      photo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iMzYwIiB2aWV3Qm94PSIwIDAgNjQwIDM2MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiZyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YwYTAwMiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwZjE3MmEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzNjAiIGZpbGw9InVybCgjYmcpIiByeD0iMjgiIC8+PGNpcmNsZSBjeD0iMTEwIiBjeT0iMTA0IiByPSI1NCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE2KSIgLz48Y2lyY2xlIGN4PSI1NDAiIGN5PSIyNjAiIHI9Ijg2IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIiAvPjx0ZXh0IHg9IjQ4IiB5PSIxNzYiIGZvbnQtc2l6ZT0iMzYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZmlsbD0id2hpdGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkxpYnJhcnkgV2FsayBBbHRlcm5hdGUgUGF0aDwvdGV4dD48dGV4dCB4PSI0OCIgeT0iMjE4IiBzdHlsZT0iZm9udC1zaXplOjIycHg7Zm9udC1mYW1pbHk6QXJpYWwsIHNhbnMtc2VyaWY7ZmlsbDojZTJlOGYwOyI+U2Vjb25kYXJ5IEtNTCByb3V0ZSBmZWVkaW5nIGludG8gTGlicmFyeSBXYWxrPC90ZXh0Pjx0ZXh0IHg9IjQ4IiB5PSIzMDgiIHN0eWxlPSJmb250LXNpemU6MThweDtmb250LWZhbWlseTpBcmlhbCwgc2Fucy1zZXJpZjtmbGw6I2Y4ZmFmYzsiPlJlcGxhY2UgdGhpcyB3aXRoIHlvdXIgcm91dGUgcGhvdG8gd2hlbiBpdCBpcyByZWFkeS48L3RleHQ+PC9zdmc+",
      summary: "This alternate route from the KML provides another approach into the Library Walk area and helps show that the problem is a network, not just one single segment.",
      issues: "Multiple feeder paths converge into dense campus circulation, which can push riders into uncertain merges.",
      improvement: "Use consistent wayfinding so alternate riders are funneled into the safest approach before they hit the central corridor.",
      marker: [32.87883146, -117.23861983],
      related_markers: ["Alternate Path to Library Walk"]
    }
  ];

  const ASSESSMENTS = [
    {
      name: "Ridgewalk (near RIMAC)",
      risk: "Low",
      score: 1.14,
      summary: "Traffic patterns do not surge at passing periods, and the path feels fairly wide and open.",
      issues: "The corridor functions relatively smoothly overall, but signage could still be better.",
      improvement: "Improve wayfinding and signage so path priority is clearer earlier.",
      focus: {
        center: [32.885514, -117.240735],
        zoom: 17.7
      },
      focusPath: [
        [32.87974, -117.24082],
        [32.8796, -117.24079],
        [32.87942, -117.24075],
        [32.87922, -117.24071],
        [32.87902, -117.24068]
      ],
      linkedRoutes: []
    },
    {
      name: "Ridgewalk (near new Marshall)",
      risk: "Medium",
      score: 1.14,
      summary: "The area outside Goody's market can be congested, even though riders generally follow the signage.",
      issues: "Localized congestion near storefront activity causes friction between riders and pedestrians.",
      improvement: "Clarify lane separation near the market frontage and strengthen wayfinding.",
      focus: {
        center: [32.881742, -117.240850],
        zoom: 17.5
      },
      focusPath: [
        [32.88082, -117.23995],
        [32.88064, -117.23991],
        [32.88046, -117.23987],
        [32.88028, -117.23984],
        [32.88008, -117.2398]
      ],
      linkedRoutes: []
    },
    {
      name: "Sixth College",
      risk: "High",
      score: 10.26,
      summary: "High congestion with many pedestrians and riders crossing each other's paths.",
      issues: "The wide sidewalk attracts more micromobility riders than the narrow bike lane, which increases mixing.",
      improvement: "Make the preferred riding route more obvious and better separated.",
      focus: {
        center: [32.879944, -117.240786],
        zoom: 17.6
      },
      linkedRoutes: ["Sixth to Marshall Connector"]
    },
    {
      name: "Sun God",
      risk: "High",
      score: 10.33,
      summary: "This area had the highest amount of foot and micromobility traffic in the study.",
      issues: "Intersections near the roundabout, pedestrians in the bike lane, and inconsistent roundabout use make it difficult to navigate.",
      improvement: "Tighten roundabout markings and reinforce expected movement through the conflict zone.",
      focus: {
        center: [32.876703, -117.240511],
        zoom: 17.6
      },
      focusPath: [
        [32.87798, -117.23603],
        [32.8779, -117.2359],
        [32.8778, -117.23575],
        [32.87766, -117.23557],
        [32.8775, -117.23538]
      ],
      linkedRoutes: ["Library Walk Spine Path"]
    },
    {
      name: "Main Gym",
      risk: "High",
      score: 15.45,
      summary: "Lack of a bike path, narrowing sidewalk, and blind turns lead to congestion and frequent evasive action.",
      issues: "Sharp turns and constrained width create regular close calls and late reactions.",
      improvement: "Use the planned path intervention to create a clearer protected corridor.",
      linkedRoutes: ["Main Gym Planned Path"]
    },
    {
      name: "Revelle",
      risk: "High",
      score: 10.04,
      summary: "The bike path ends where the sidewalk narrows, forcing riders to weave through a crowded academic area.",
      issues: "Heavy lecture traffic and the unmarked shift near Mayer Hall increase collision risk.",
      improvement: "Extend markings and protected guidance through the transition area.",
      linkedRoutes: ["Mayer Hall Planned Painted Path", "Flex Delineator Pole Path"]
    },
    {
      name: "Library Walk",
      risk: "Medium",
      score: 19.90,
      summary: "There are many pedestrians and riders here, but the area still has abundant space compared with the most dangerous sites.",
      issues: "Close calls still happen and stronger concrete boundaries would make travel paths clearer.",
      improvement: "Reinforce directional flow and clearer boundaries through the busiest crossings.",
      focus: {
        center: [32.880510, -117.237548],
        zoom: 17.55
      },
      linkedRoutes: ["Library Walk Spine Path", "Library Walk Alternate Path"]
    },
    {
      name: "Warren Mall",
      risk: "Low",
      score: 0.46,
      summary: "The path is wide and evasive action is rare, so the area felt comparatively safe.",
      issues: "Signage is limited even though the spatial conditions are good.",
      improvement: "Add simple bike route signage without overcomplicating the space.",
      focus: {
        center: [32.881170, -117.235582],
        zoom: 17.55
      },
      focusPath: [
        [32.88008, -117.23486],
        [32.88016, -117.23472],
        [32.88024, -117.23458],
        [32.88034, -117.23443],
        [32.88046, -117.23427]
      ],
      linkedRoutes: []
    },
    {
      name: "Lyman Ave",
      risk: "Medium",
      score: 18.45,
      summary: "Despite the high point average, the area felt more medium risk because rider volume was lower than at the highest-risk locations.",
      issues: "No dedicated micromobility lane causes weaving and merging between pedestrians and riders.",
      improvement: "Create a more consistent dedicated lane or marked merge zone.",
      focus: {
        center: [32.879237, -117.236545],
        zoom: 17.5
      },
      focusPath: [
        [32.87826, -117.23338],
        [32.87816, -117.23316],
        [32.87804, -117.23294],
        [32.87794, -117.23274],
        [32.87786, -117.23255],
        [32.8778, -117.23234]
      ],
      linkedRoutes: []
    }
  ];

  return { ROUTES, ASSESSMENTS };
})();
