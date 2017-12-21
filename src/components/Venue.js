import React from 'react';

const Venue = (props) => {
    console.log('venue from Venue', props.venue)
    return (
      <li>
          {props.venue.name}
      </li>
    )
}

export default Venue
