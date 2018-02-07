import React from "react";
import Map from "../components/Map";

const MapContainer = props => {
  return (
    <div className="page-item center">
      {props.lat !== "" ? (
        <Map
          markers={props.markers}
          lat={props.lat}
          lng={props.lng}
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

export default MapContainer;
