import React from 'react';
import {
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const Map = withGoogleMap(props =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
    {props.markers.map(mark => {
        return(
        <Marker position={{lat: mark.lat, lng: mark.lng}} />
        )
    })}
    </GoogleMap>
  );
  
export default Map;