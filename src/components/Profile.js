import React from 'react';
// import {Button} from 'react-materialize'
import api from '../services/api'
import UserVenuesList from './UserVenuesList';


class Profile extends React.Component {

  render() {

    const user = api.userVenues.getUserVenues(this.props.currentUser)
      console.log('user from Profile', user['first_Name'])
      console.log('user venues from Profile', user['venues'])
    // const allUserVenues = userVenues.map(userVenue => <UserVenue key={userVenue.id.toString()} userVenue={userVenue}/>)
    // console.log('User details on Profile', this.props.userDetails)

    // const user = userVenues

    return (
      <div className="page-item center">
        <div>
          <h3>{user.firstName + " " + user.lastName}</h3>
        </div>
        <div>
          <UserVenuesList userDetails={user} />
        </div>
      </div>
    )
  }
}


export default Profile
