import React from 'react';
import { Button, Modal } from 'react-materialize'
import UserVenuesList from './UserVenuesList';


class Profile extends React.Component {

  render() {

    console.log('currentUser from Profile', this.props.currentUser)
    const user = this.props.currentUser
    console.log('currentUser in Profile', this.props.currentUser)

    return (
      <div className="page-item center">
        <h4>{"Hi, " + user.first_name + "!"}</h4>
        <Modal
          header={user.first_name + "'s Venues"}
          fixedFooter
          trigger={<Button className="important-button" waves='light' node='a'>See Your Venues</Button>}>
          <div>
            <UserVenuesList user={user} />
          </div>
        </Modal>
        {/* <div>
          <h3>{user.first_name + "'s Venues"}</h3>
        </div>
        <div>
          <UserVenuesList user={user} />
        </div> */}
      </div>
    )
  }
}


export default Profile
