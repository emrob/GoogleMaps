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


MapWrapper.prototype.addInfoWindow = function () {
  let infowindow = new google.maps.InfoWindow({
    content: "My Home"
  });
 for(marker of this.markers){
   marker.addListener('click', function(){
    infowindow.open(this.googleMap, marker);
  })
};
}
