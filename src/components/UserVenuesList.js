import React from 'react';
// import {Col, Input, Row, Button} from 'react-materialize'
import UserVenue from './UserVenue';


const UserVenueList = props => {


  const allUserVenues = props.user.venues.map(userVenue => <UserVenue key={"userVenue-" + userVenue.id.toString()} userVenue={userVenue} user={props.user}/>)

  return (
      <div className="page-item center">
        {allUserVenues}
      </div>
    )
}


export default UserVenueList
