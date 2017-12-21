import React from 'react';
import Venue from './Venue';

const VenueList = (props) => {

    console.log('venues from VenueList', props.venues)
    // debugger

    const allVenues = props.venues.map(venue => <Venue venue={venue} />)
    return (
      <div>
        <h3>Venue List</h3>
        <ul>
          {allVenues}
        </ul>
      </div>
    )
}

export default VenueList
