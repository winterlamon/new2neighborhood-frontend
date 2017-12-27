import React from 'react';
import {Button} from 'react-materialize'


const Profile = (props) => {

    return (
      <div className="page-item center">
        <div>
          <h3>Jordan Storms</h3>
        </div>
        <div>
          <h4>My Lists</h4>
        <Button>Create New List</Button>
        </div>
      </div>
    )
}


export default Profile
