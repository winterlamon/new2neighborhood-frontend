import React from 'react';
import Profile from '../components/Profile';

const UserContainer = (props) => {

  console.log('currentUser in UserContainer', props.currentUser)

    return (
      <div>
        <Profile
          currentUser={props.currentUser}
        />
      </div>
    )
}

export default UserContainer
