<<<<<<< HEAD
=======
<script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"
    integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw=="
    crossorigin=""></script>

//create a map using CRS
let map = L.map('map', {
  crs: L.CRS.Simple
});

let bounds = //[insert bounds here];
var image = L.imageOverlay('School Map 2.png', bounds).addTo(map);
map.fitBounds(bounds);
>>>>>>> dbc0073a9c1dcc7538b9a818eb1953ad72c6cfc6
