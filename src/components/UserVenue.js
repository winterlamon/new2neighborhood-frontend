import React from "react";
import { Button, Card, Row } from "react-materialize";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";

class UserVenue extends React.Component {
  state = {
    visited: false
  };

  handleVisitedClick = event => {
    event.preventDefault();
    this.setState({ visited: true });
    this.props.updateUserVenue(this.props.venue);
  };

  render() {
    const venue = this.props.venue;

    return (
      <div>
        <Row>
          <Card
            className="card"
            title={venue.name}
            actions={
              !this.props.venue.visited
                ? [
                    <Button key={0} onClick={this.handleVisitedClick}>
                      Mark As Visited
                    </Button>
                  ]
                : null
            }
          >
            <p>
              {venue.address}
              {", " + venue.city}
              {", " + venue.state} {venue.postalCode}
            </p>
            <div>
              <p>
                {this.props.venue.visited ? (
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
