const renderMarkers = (markerLocations, map, markersArray) => {
  const bounds = new window.google.maps.LatLngBounds();
  markerLocations.forEach((marker) => {
    const infowindow = new window.google.maps.InfoWindow({
      content: marker.name,
    });

    const position = new window.google.maps.LatLng(
      marker.latitude,
      marker.longitude
    );

    const locationMarker = new window.google.maps.Marker({
      position,
      title: marker.name,
      map,
    });

    locationMarker.addListener("click", () => {
      if (marker.name) {
        infowindow.open(map, locationMarker);
      }
    });

    bounds.extend(position);

    markersArray.push(locationMarker);
  });
  map.fitBounds(bounds);
};

export default renderMarkers;
