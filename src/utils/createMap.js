const createMap = (options = {}) =>
  new window.google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.1199, lng: 72.8643 },
    zoom: 5,
    ...options,
  });

export default createMap;
