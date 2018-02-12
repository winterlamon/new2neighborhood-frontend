import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import Profile from "../components/Profile";

const UserContainer = props => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default withRouter(
  connect(
    state => ({
      ...state.authReducer
    }),
    actions
  )(UserContainer)
);
