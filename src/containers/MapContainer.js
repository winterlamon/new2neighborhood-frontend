import React from 'react';
import Map from '../components/Map'

class MapContainer extends React.Component {
    
    state = {
        venues: this.props.venues,
        lat: this.props.lat,
        lng: this.props.lng,
        markers: [{lat: this.props.lat, lng: this.props.lng}]
    }
 


    render() {
        debugger
        console.log('markers', this.state.markers)
        return(
            <div>
               <Map markers={this.state.markers}
                    lat={this.state.lat}
                    lng={this.state.lng}
                    containerElement={<div style={{ height: `600px` }} />}
                    mapElement={<div style={{ height: `90%`, width: `98%`}} />}
                />
            </div>

        )
    }
}

export default MapContainer;
