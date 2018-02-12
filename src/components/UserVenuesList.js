import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import UserVenue from "./UserVenue";

const UserVenueList = props => {
  const allUserVenues = props.currentUser.venues.map(venue => (
    <UserVenue
      key={
        "user-" +
        props.currentUser.id.toString() +
        "venue-" +
        venue.id.toString()
      }
      venue={venue}
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
