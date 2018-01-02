import React from 'react';
import UserVenuesList from './UserVenuesList';


class Profile extends React.Component {

  render() {

    console.log('currentUser from Profile', this.props.currentUser)
    const user = this.props.currentUser

    return (
      <div className="page-item center">
        <div>
          <h3>{user.first_name + "'s Venues"}</h3>
        </div>
        <div>
          <UserVenuesList user={user} />
        </div>
      </div>
    )
  }
}


export default Profile
