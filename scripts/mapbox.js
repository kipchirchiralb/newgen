mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxiZXJ0a2lwY2hpcmNoaXIiLCJhIjoiY2t2MDlxamQ1MmZkZDJ2bzBjMmFra3RmaSJ9.GjNjHJVdYSJsKrAc6Oz8vw";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [35.274927892312974, 0.519501826341634], // starting position [lng, lat]
  zoom: 14, // starting zoom
});
const marker = new mapboxgl.Marker()
  .setLngLat([35.274927892312974, 0.519501826341634])
  .addTo(map);
