import React from 'react';
import Venue from './Venue';
import {sampleVenues} from '../sampleData';


const VenueList = () => {

    const allVenues = sampleVenues.map(venue => <Venue venue={venue} />)

    return (
      <div className="page-item center">
        <h3>Venue List</h3>
          {allVenues}
      </div>
    )
}


export default VenueList
