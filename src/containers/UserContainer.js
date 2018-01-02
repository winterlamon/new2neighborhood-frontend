import React from 'react';
import Profile from '../components/Profile';

const UserContainer = (props) => {

    return (
      <div>
        <Profile
          currentUser={props.currentUser}
          // userDetails={props.userDetails} 
        />
      </div>
    )
}

export default UserContainer
