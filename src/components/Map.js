import React from 'react';
import {
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const Map = withGoogleMap(props =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 40.704069, lng: -74.0132413 }}
    >
    {props.markers.map(mark => {
        return(
        <Marker position={{lat: mark.lat, lng: mark.lng}} />
        )
    })}
    </GoogleMap>
  );
  
export default Map;