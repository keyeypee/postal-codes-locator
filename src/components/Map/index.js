import React, { useEffect, useState } from "react";

import createMap from "../../utils/createMap";
import clearOverlays from "../../utils/clearOverlays";
import renderMarkers from "../../utils/renderMarkers";
import { Container } from "./styles";

const markersArray = [];

const Map = ({ markerLocations }) => {
  const [map, setMap] = useState(null);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (markerLocations.length > 0) {
      clearOverlays(markersArray);
      renderMarkers(markerLocations, map, markersArray);
    }
  }, [JSON.stringify(markerLocations)]);

  useEffect(() => {
    if (window.google && flag) {
      setMap(createMap({}));
      setFlag(false);
    }
  }, [window.google]);

  return <Container id="map" />;
};

export default Map;
