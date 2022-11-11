/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./MapWrap.css";

function MapWrap(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAz4T6y4tt_IU8o-ngId8z0lO-wlwOpOrs",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map data={props.data.venue.location} />;
}

function Map(props) {
  const latNum = Number(props.data.lat);
  const lngNum = Number(props.data.lon);
  const [markerLoc, setMarkerLoc] = useState({ lat: latNum, lng: lngNum });
  const center = useMemo(() => ({ lat: latNum, lng: lngNum }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <MarkerF key={1} position={markerLoc} />
    </GoogleMap>
  );
}

export default MapWrap;
