import React from 'react';
import VenueList from '../components/VenueList';

const VenueContainer = props => {

  return (
    <div>
      <VenueList
        venues={props.venues}
        buttonHandler={props.buttonHandler}
        handleChange={props.handleChange}
        handleSearch={props.handleSearch}
        address={props.address}
        city={props.city}
        state={props.state}
        zip={props.zip}
        lat={props.lat}
        lng={props.lng}
        radius={props.radius}
        section={props.section}
        searched={props.searched}
        currentUser={props.currentUser}
        addVenueToUser={props.addVenueToUser}
      />
    </div>
  )
}

export default VenueContainer
