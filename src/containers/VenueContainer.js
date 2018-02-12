import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import VenueList from "../components/VenueList";

const VenueContainer = props => {
  return (
    <div>
      <VenueList
        buttonHandler={props.buttonHandler}
        handleChange={props.handleChange}
        address={props.address}
        city={props.city}
        state={props.state}
        zip={props.zip}
        radius={props.radius}
        section={props.section}
      />
    </div>
  );
};

export default withRouter(
  connect(
    state => ({
      ...state.authReducer
    }),
    actions
  )(VenueContainer)
);
