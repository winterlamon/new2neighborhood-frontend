import React from 'react';
import VenueList from '../components/VenueList';

const VenueContainer = props => {

  return (
    <div>
      <VenueList
        venues={props.venues}
        buttonHandler={props.buttonHandler}
        handleChange={props.handleChange}
        address={props.address}
        city={props.city}
        state={props.state}
        zip={props.zip}
        lat={props.lat}
        lng={props.lng}
        radius={props.radius}
        section={props.section}
        currentUser={props.currentUser}
      />
    </div>
  )
}

export default VenueContainer
