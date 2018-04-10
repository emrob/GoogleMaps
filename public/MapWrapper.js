const MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coordinates){
  const marker = new google.maps.Marker({
    position: coordinates,
    map: this.googleMap
  })
  this.markers.push(marker);
}
