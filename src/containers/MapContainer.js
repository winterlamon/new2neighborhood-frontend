import React from 'react';
import Map from '../components/Map'

const MapContainer = props => {
    return(
        <div className="page-item center">
            {props.lat !=='' ?
            <Map markers={props.markers}
                lat={props.lat}
                lng={props.lng}
                containerElement={<div style={{ height: `500px` }} />}
                mapElement={<div style={{ height: `100%`, width: `100%`}} />}
            />
            :
            <div style={{ height: `500px` }}>
                <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-orange-only">
                        <div class="circle-clipper left">
                            <div class="circle">
                            </div>
                        </div>
                        <div class="gap-patch">
                            <div class="circle">
                            </div>
                        </div>
                        <div class="circle-clipper right">
                            <div class="circle">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>

    )
}

export default MapContainer;
