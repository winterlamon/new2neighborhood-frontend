import React from 'react';
import Map from '../components/Map'

const MapContainer = props => {
    return(
        <div>
            <Map markers={props.markers}
                lat={props.lat}
                lng={props.lng}
                containerElement={<div style={{ height: `600px` }} />}
                mapElement={<div style={{ height: `90%`, width: `98%`}} />}
            />
        </div>

    )
}

export default MapContainer;
