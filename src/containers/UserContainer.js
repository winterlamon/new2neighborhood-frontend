import React from "react";
import Profile from "../components/Profile";

const UserContainer = props => {
  return (
    <div>
      <Profile currentUser={props.currentUser} />
    </div>
  );
};

export default UserContainer;
