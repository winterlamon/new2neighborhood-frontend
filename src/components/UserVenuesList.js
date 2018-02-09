import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import UserVenue from "./UserVenue";

const UserVenueList = props => {
  const allUserVenues = props.user.venues.map(userVenue => (
    <UserVenue
      key={"userVenue-" + userVenue.id.toString()}
      userVenue={userVenue}
      user={props.user}
    />
  ));

  return <div className="page-item center">{allUserVenues}</div>;
};

export default withRouter(
  connect(
    state => ({
      ...state.authReducer
    }),
    actions
  )(UserVenueList)
);
