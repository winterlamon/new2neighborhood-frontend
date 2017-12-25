import React from 'react';
import VenueList from '../components/VenueList';


const VenueContainer = (props) => {

    return (
      <div>
        <VenueList venues={props.venues}/>
      </div>
    )
}

export default VenueContainer
