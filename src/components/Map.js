import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";

const Map = withGoogleMap(props => {
  return (
    <GoogleMap defaultZoom={15} center={{ lat: props.lat, lng: props.lng }}>
      <Marker
        position={{ lat: props.lat, lng: props.lng }}
        icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
      />

      {/* {props.markers.map((mark, index) => {
        return (
          <Marker
            {...mark}
            key={index}
            position={{ lat: mark.lat, lng: mark.lng }}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            }}
          />
        );
      })} */}
    </GoogleMap>
  );
});

export default withRouter(
  connect(
    state => ({
      ...state.authReducer
    }),
    actions
  )(Map)
);
