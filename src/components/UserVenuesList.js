import React from 'react';
// import {Col, Input, Row, Button} from 'react-materialize'
import UserVenue from './UserVenue';


const UserVenueList = props => {

  console.log('user from UserVenuesList', props.user)

  const allUserVenues = props.user.venues.map(userVenue => <UserVenue key={userVenue.id.toString()} userVenue={userVenue}/>)

  return (
      <div className="page-item center">
        {allUserVenues}
      </div>
    )
}


export default UserVenueList
