/* eslint-disable no-unused-vars */
import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./MapWrap.css";

function MapWrap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAz4T6y4tt_IU8o-ngId8z0lO-wlwOpOrs",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 38, lng: -9 }), []);
  const [markerLoc, setMarkerLoc] = useState({ lat: 40.71, lng: 74.0 });

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <MarkerF key={1} position={markerLoc} />
    </GoogleMap>
  );
}

export default MapWrap;
