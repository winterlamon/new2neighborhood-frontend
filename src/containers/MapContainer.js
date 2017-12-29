import React from 'react';
import Map from '../components/Map'

class MapContainer extends React.Component {
    state = {
         markers : [
             {lat: 40.7021601, lng: -74.0149907 },
             {lat: 40.7033, lng: -74.011034},
             {lat: 40.7089645,lng: -74.0114969}
        ]

    }
    render() {
        return(
            <div>
               <Map markers={this.state.markers}
                    containerElement={<div style={{ height: `500px` }} />}
                    mapElement={<div style={{ height: `100%`, width: `50%`}} />}
                />
            </div>

        )
    }
}

export default MapContainer;
