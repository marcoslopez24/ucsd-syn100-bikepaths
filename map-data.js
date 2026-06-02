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

  const FEATURE_MARKERS = [
    { name: "Pedestrian Crossing", kind: "crossing", coords: [32.87743367, -117.24080925] },
    { name: "Pedestrian Crossing", kind: "crossing", coords: [32.87684988, -117.24074685] },
    { name: "Pedestrian Crossing", kind: "crossing", coords: [32.87777699, -117.24102288] },
    { name: "Protected Lane to Revelle Plaza", kind: "improvement", coords: [32.87499042, -117.24078169] },
    { name: "Mayer Hall Painted Lanes", kind: "improvement", coords: [32.87560052, -117.24070858] },
    { name: "Concrete Triangles on Roundabout", kind: "hazard", coords: [32.87916412, -117.24048836] },
    { name: "Yield", kind: "yield", coords: [32.87826912, -117.24073441] },
    { name: "Yield", kind: "yield", coords: [32.87884663, -117.24054988] },
    { name: "Yield", kind: "yield", coords: [32.87907766, -117.24050474] },
    { name: "Yield", kind: "yield", coords: [32.87907303, -117.24023027] },
    { name: "Yield", kind: "yield", coords: [32.87885985, -117.2397517] },
    { name: "Yield", kind: "yield", coords: [32.88022603, -117.24061724] },
    { name: "Yield", kind: "yield", coords: [32.88085187, -117.2406231] },
    { name: "Yield", kind: "yield", coords: [32.87653916, -117.24073989] },
    { name: "Yield", kind: "yield", coords: [32.87643456, -117.24074141] },
    { name: "Bike Lane Ends", kind: "hazard", coords: [32.88237721, -117.24056534] },
    { name: "Alternate Path to Library Walk", kind: "wayfinding", coords: [32.87841131, -117.23874674] },
    { name: "Alternate Path to Library Walk", kind: "wayfinding", coords: [32.88007337, -117.23840764] },
    { name: "Alternate Path to Library Walk", kind: "wayfinding", coords: [32.87706321, -117.23837025] },
    { name: "Sixth to Marshall Connection", kind: "wayfinding", coords: [32.88114399, -117.2406004] },
    { name: "Main Gym Micromobility Path", kind: "improvement", coords: [32.87719562, -117.24077446] }
  ];

  const CONFLICT_ZONES = [
    {
      name: "Roundabout Triangle",
      coords: [
        [32.87913322, -117.24048109],
        [32.87913565, -117.24050425],
        [32.87914465, -117.24052231],
        [32.8791346, -117.24052112],
        [32.87912525, -117.24051916],
        [32.87911256, -117.24051771],
        [32.8791017, -117.24051651],
        [32.87911855, -117.2405025],
        [32.87912667, -117.24049322]
      ]
    },
    {
      name: "Roundabout Triangle",
      coords: [
        [32.87920998, -117.24050088],
        [32.87922213, -117.2405219],
        [32.87924199, -117.24054293],
        [32.87921489, -117.24053378],
        [32.87919129, -117.24052806],
        [32.87920276, -117.24051637]
      ]
    },
    {
      name: "Roundabout Triangle",
      coords: [
        [32.87915242, -117.24044901],
        [32.87915682, -117.24043804],
        [32.87915799, -117.24042673],
        [32.87915828, -117.24041301],
        [32.87915687, -117.24040003],
        [32.87918094, -117.24044311],
        [32.87916637, -117.24044394]
      ]
    }
  ];

  const CAMPUS_PATHS = [
    {
      name: "La Jolla Farms separated corridor",
      category: "Separated micromobility path",
      color: "#1d4ed8",
      coords: [[32.8864, -117.2421], [32.8859, -117.24172], [32.8852, -117.24135], [32.8846, -117.24105], [32.8838, -117.24075], [32.8828, -117.24045], [32.8818, -117.2403], [32.8805, -117.24018], [32.8792, -117.24012], [32.8782, -117.24007], [32.8768, -117.24005], [32.8755, -117.24002], [32.8742, -117.24002]]
    },
    {
      name: "North rimac spur",
      category: "Separated micromobility path",
      color: "#1d4ed8",
      coords: [[32.88585, -117.24172], [32.8859, -117.2409], [32.88595, -117.24015], [32.88598, -117.23945], [32.886, -117.23885]]
    },
    {
      name: "Library to East Campus separated path",
      category: "Separated micromobility path",
      color: "#1d4ed8",
      coords: [[32.88032, -117.23731], [32.88055, -117.2367], [32.88085, -117.23608], [32.88105, -117.23565], [32.8809, -117.23512], [32.88055, -117.23445], [32.8802, -117.2338], [32.8799, -117.2332], [32.87955, -117.2327]]
    },
    {
      name: "South campus separated loop",
      category: "Separated micromobility path",
      color: "#1d4ed8",
      coords: [[32.8742, -117.24002], [32.8738, -117.23945], [32.8736, -117.2387], [32.8738, -117.23795], [32.8743, -117.23735], [32.87495, -117.23695], [32.87555, -117.23675], [32.8762, -117.23662], [32.87695, -117.23658], [32.8776, -117.2365]]
    },
    {
      name: "South interior separated branch",
      category: "Separated micromobility path",
      color: "#1d4ed8",
      coords: [[32.87495, -117.23695], [32.87535, -117.2364], [32.8757, -117.23585], [32.87615, -117.2353], [32.87655, -117.23485]]
    },
    {
      name: "Muir to theatre district separated path",
      category: "Separated micromobility path",
      color: "#1d4ed8",
      coords: [[32.87655, -117.23485], [32.87665, -117.23545], [32.87678, -117.23605], [32.87695, -117.23668], [32.87712, -117.2373], [32.87728, -117.23795], [32.87732, -117.23862], [32.87718, -117.23918]]
    },
    {
      name: "South parking separated spur",
      category: "Separated micromobility path",
      color: "#1d4ed8",
      coords: [[32.87595, -117.2339], [32.87625, -117.23355], [32.87658, -117.2332], [32.8769, -117.23282]]
    },
    {
      name: "Warren switching station separated path",
      category: "Separated micromobility path",
      color: "#1d4ed8",
      coords: [[32.88092, -117.23418], [32.88142, -117.23382], [32.88192, -117.23348], [32.88238, -117.23315], [32.8828, -117.23282], [32.88312, -117.23242], [32.88325, -117.23192]]
    },
    {
      name: "East freeway connector separated path",
      category: "Separated micromobility path",
      color: "#1d4ed8",
      coords: [[32.8762, -117.23355], [32.87675, -117.23372], [32.8773, -117.23388], [32.87795, -117.23402], [32.87865, -117.23408], [32.87935, -117.23412], [32.87995, -117.2342], [32.88055, -117.23432], [32.8811, -117.23448]]
    },
    {
      name: "Central dedicated east west route",
      category: "Dedicated bike path",
      color: "#22c55e",
      coords: [[32.87818, -117.24022], [32.87825, -117.2395], [32.87822, -117.23875], [32.87815, -117.238], [32.87808, -117.23725], [32.87805, -117.23655], [32.87808, -117.23588], [32.87818, -117.2352], [32.87835, -117.2346], [32.8786, -117.23405], [32.87895, -117.2335]]
    },
    {
      name: "Library walk dedicated corridor",
      category: "Dedicated bike path",
      color: "#22c55e",
      coords: [[32.87818, -117.24022], [32.8782, -117.23925], [32.8782, -117.23835], [32.8782, -117.23745], [32.8782, -117.23655], [32.87818, -117.23565]]
    },
    {
      name: "Price center dedicated route",
      category: "Dedicated bike path",
      color: "#22c55e",
      coords: [[32.87818, -117.24022], [32.87818, -117.23915], [32.87818, -117.2381], [32.87822, -117.2371], [32.87832, -117.2362], [32.8785, -117.23535], [32.87878, -117.23455], [32.87905, -117.23385]]
    },
    {
      name: "South central dedicated curve",
      category: "Dedicated bike path",
      color: "#22c55e",
      coords: [[32.8769, -117.23865], [32.87615, -117.23858], [32.87545, -117.23848], [32.8748, -117.23818], [32.87422, -117.23772], [32.87382, -117.23712], [32.87362, -117.23642], [32.8736, -117.23565]]
    },
    {
      name: "East village dedicated corridor",
      category: "Dedicated bike path",
      color: "#22c55e",
      coords: [[32.87855, -117.23345], [32.8784, -117.23278], [32.87832, -117.23208], [32.8783, -117.23135], [32.87835, -117.23062]]
    },
    {
      name: "North east dedicated connector",
      category: "Dedicated bike path",
      color: "#22c55e",
      coords: [[32.87895, -117.2335], [32.87945, -117.23342], [32.87995, -117.23335], [32.88045, -117.23328], [32.88095, -117.2332], [32.88142, -117.23312]]
    },
    {
      name: "Warren field dedicated curve",
      category: "Dedicated bike path",
      color: "#22c55e",
      coords: [[32.87895, -117.2335], [32.87935, -117.23305], [32.8798, -117.23262], [32.88028, -117.23228], [32.88078, -117.23208], [32.88128, -117.23198], [32.8818, -117.23195], [32.88228, -117.23195], [32.88272, -117.23202]]
    },
    {
      name: "Muir field dedicated edge",
      category: "Dedicated bike path",
      color: "#22c55e",
      coords: [[32.87818, -117.24022], [32.87772, -117.24018], [32.87725, -117.24014], [32.87672, -117.24012], [32.87618, -117.24012], [32.87562, -117.24012], [32.87505, -117.24014]]
    },
    {
      name: "Marshall field dedicated branch",
      category: "Dedicated bike path",
      color: "#22c55e",
      coords: [[32.87895, -117.2335], [32.87925, -117.23302], [32.87952, -117.23258], [32.8797, -117.23218]]
    },
    {
      name: "North multi use corridor",
      category: "Multi use path",
      color: "#dc2626",
      coords: [[32.8858, -117.2391], [32.8858, -117.23835], [32.88582, -117.23758], [32.88582, -117.23682], [32.88582, -117.23605], [32.8858, -117.23528], [32.88578, -117.23458]]
    },
    {
      name: "Library walk multi use spine",
      category: "Multi use path",
      color: "#dc2626",
      coords: [[32.8782, -117.23565], [32.87822, -117.2351], [32.87822, -117.23452], [32.87825, -117.23395], [32.8783, -117.23342], [32.87838, -117.23295]]
    },
    {
      name: "Price center multi use loop",
      category: "Multi use path",
      color: "#dc2626",
      coords: [[32.87818, -117.23565], [32.87792, -117.2352], [32.8776, -117.2349], [32.87722, -117.23465], [32.87688, -117.23428], [32.87662, -117.23382], [32.87648, -117.2334]]
    },
    {
      name: "Geisel west multi use approach",
      category: "Multi use path",
      color: "#dc2626",
      coords: [[32.87968, -117.23582], [32.87985, -117.23558], [32.8799, -117.23525], [32.87982, -117.23498], [32.87968, -117.23482]]
    },
    {
      name: "Mandeville meadow multi use loop",
      category: "Multi use path",
      color: "#dc2626",
      coords: [[32.87755, -117.23548], [32.87802, -117.23512], [32.87842, -117.23468], [32.87852, -117.2341], [32.8783, -117.23362], [32.87795, -117.23328], [32.87745, -117.23308], [32.87698, -117.23302], [32.87655, -117.23328], [32.87628, -117.23372], [32.87618, -117.23425], [32.8763, -117.23478], [32.87672, -117.23515], [32.87712, -117.23538]]
    },
    {
      name: "East edge multi use path",
      category: "Multi use path",
      color: "#dc2626",
      coords: [[32.8789, -117.23298], [32.87882, -117.23228], [32.87878, -117.23162], [32.87872, -117.23095], [32.87868, -117.23028], [32.87865, -117.22955]]
    }
  ];

  return { ROUTES, ASSESSMENTS, FEATURE_MARKERS, CONFLICT_ZONES, CAMPUS_PATHS };
})();
