import React from "react";
import { Button, Modal } from "react-materialize";
import UserVenuesList from "./UserVenuesList";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";

class Profile extends React.Component {
  render() {
    const user = this.props.currentUser;

    return (
      <div className="page-item center">
        <h4>{"Hi, " + user.first_name + "!"}</h4>
        <Modal
          header={user.first_name + "'s Venues"}
          fixedFooter
          trigger={
            <Button className="important-button" waves="light" node="a">
              See Your Venues
            </Button>
          }
        >
          <div>
            <UserVenuesList user={user} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      ...state.authReducer
    }),
    actions
  )(Profile)
);
