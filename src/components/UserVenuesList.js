import React from 'react';
// import {Col, Input, Row, Button} from 'react-materialize'
import UserVenue from './UserVenue';


const UserVenueList = props => {

  console.log('user details from UserVenuesList', props.userDetails)

  // const allUserVenues = props.userDetails.venues.map(userVenue => <UserVenue key={userVenue.id.toString()} userVenue={userVenue}/>)

  return (
      <div className="page-item center">
        <h3>My Venues</h3>
          {/* {allUserVenues} */}
      </div>
    )
}


export default UserVenueList
