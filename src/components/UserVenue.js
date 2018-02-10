import React from "react";
import { Button, Card, Row } from "react-materialize";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import api from "../services/api";

class UserVenue extends React.Component {
  state = {
    visited: false
  };

  handleVisitedClick = event => {
    event.preventDefault();
    api.userVenues.deleteUserVenues(
      this.props.currentUser,
      this.state.userVenue
    );
  };

  // handleVenueRemoval = () => {
  //   api.userVenues.updateUserVenues(this.props.user, this.props.venue, this.state.visited)
  // }

  render() {
    const venue = this.props.userVenue;

    return (
      <div>
        <Row>
          <Card
            className="card"
            title={venue.name}
            actions={
              !this.state.visited
                ? [
                    <Button onClick={this.handleVisitedClick}>
                      Mark As Visited
                    </Button>
                  ]
                : [
                    <Button onClick={this.handleVisitedClick}>
                      Mark As Not Visited
                    </Button>
                  ]
            }
          >
            {/* // [<Button onClick={this.handleVenueRemoval} >Remove</Button>]}> */}
            <p>
              {venue.address}
              {", " + venue.city}
              {", " + venue.state} {venue.postalCode}
            </p>
            <div>
              <p>
                {this.state.visited ? (
                  <em>
                    <strong>You've been here before.</strong>
                  </em>
                ) : (
                  <em>
                    <strong>You haven't been here yet.</strong>
                  </em>
                )}
              </p>
            </div>
          </Card>
        </Row>
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
  )(UserVenue)
);
