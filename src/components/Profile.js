import React from 'react';
// import {Button} from 'react-materialize'
import api from '../services/api'
import UserVenuesList from './UserVenuesList';


class Profile extends React.Component {

  render() {

    console.log('currentUser from Profile', this.props.currentUser)
    const user = this.props.currentUser
    // const user = api.userVenues.getUserVenues(this.props.currentUser)
    // const allUserVenues = userVenues.map(userVenue => <UserVenue key={userVenue.id.toString()} userVenue={userVenue}/>)
    // console.log('User details on Profile', this.props.userDetails)

    // const user = userVenues

    return (
      <div className="page-item center">
        <div>
          <h3>{user.first_name + "'s " + "Venues"}</h3>
        </div>
        <div>
          <UserVenuesList user={user} />
        </div>
      </div>
    )
  }
}


export default Profile
