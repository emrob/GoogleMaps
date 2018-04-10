const initialize = function(){

const container = document.getElementById('main-map');
const startPoint = {lat:51.124703, lng: 0.0084316}
const zoom = 14;

const map = new MapWrapper(container, startPoint, zoom);

map.addMarker(startPoint);
map.addInfoWindow();








};

window.addEventListener('DOMContentLoaded', initialize)
