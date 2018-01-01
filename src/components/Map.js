import React from 'react';
import {
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const Map = withGoogleMap(props => {
    return (
      <GoogleMap
        defaultZoom={15}
        center={{ lat: props.lat, lng: props.lng }}
      >
      {props.markers.map((mark,index) => {
          return(
          
          <Marker 
            key={index} 
            position={{lat: mark.lat, lng: mark.lng}} 
            // icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'}}
          />
          )
      })}
      </GoogleMap>
  )
  })
  
export default Map;