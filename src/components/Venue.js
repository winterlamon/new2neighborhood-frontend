import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import { Button, Card, Row } from "react-materialize";

class Venue extends React.Component {
  handleClick = event => {
    event.preventDefault();
    this.props.addVenueToUser(this.props.currentUser, this.props.venue);
  };

  render() {
    return (
      <div>
        <Row>
          <Card
            className="card"
            title={this.props.venue.name}
            actions={[
              <Button
                key={"venue-button-" + this.props.venue.id}
                onClick={this.handleClick}
              >
                Add to My Venues
              </Button>
            ]}
          >
            <p>
              {this.props.venue.address}
              {", " + this.props.venue.city}
              {", " + this.props.venue.state} {this.props.venue.postalCode}
            </p>
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
  )(Venue)
);
