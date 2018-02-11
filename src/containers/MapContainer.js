import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import Map from "../components/Map";

const MapContainer = props => {
  return (
    <div className="page-item center">
      {props.currentUser.lat !== null ? (
        <Map
          // markers={props.markers}
          lat={props.currentUser.lat}
          lng={props.currentUser.lng}
          containerElement={<div style={{ height: `500px` }} />}
          mapElement={<div style={{ height: `100%`, width: `100%` }} />}
        />
      ) : (
        <div style={{ height: `500px` }}>
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-orange-only">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(
  connect(
    state => ({
      ...state.authReducer
    }),
    actions
  )(MapContainer)
);
