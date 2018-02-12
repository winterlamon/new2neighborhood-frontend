import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import UserVenue from "./UserVenue";

const UserVenueList = props => {
  let sortedVenues = props.currentUser.venues.sort(function(a, b) {
    return a.visited - b.visited;
  });
  let allUserVenues = sortedVenues.map(venue => (
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

  return (
    <div className="page-item center">
      {props.currentUser.venues.length === 0 ? (
        <p>You currently don't have any venues saved.</p>
      ) : (
        allUserVenues
      )}
    </div>
  );
};

export default withRouter(
  connect(
    state => ({
      ...state.authReducer
    }),
    actions
  )(UserVenueList)
);
