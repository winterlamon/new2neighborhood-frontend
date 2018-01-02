import React from 'react';
import {Button} from 'react-materialize'


class Profile extends React.Component {
  render() {

    const user = this.props.currentUser
    console.log('currentUser in Profile', this.props.currentUser)

    return (
      <div className="page-item center">
        <div>
          <h3>{user.firstName + " " + user.lastName}</h3>
        </div>
        <div>
          <h4>My Lists</h4>
        <Button>Create New List</Button>
        </div>
      </div>
    )
  }
}


export default Profile
