import React from 'react';
import Map from '../components/Map'

const MapContainer = props => {
    return(
        <div className="page-item center">
            <Map markers={props.markers}
                lat={props.lat}
                lng={props.lng}
                containerElement={<div style={{ height: `500px` }} />}
                mapElement={<div style={{ height: `100%`, width: `100%`}} />}
            />
        </div>

    )
}

export default MapContainer;
