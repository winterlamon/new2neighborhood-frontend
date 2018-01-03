import React from 'react';
import {Button, Card, Row} from 'react-materialize'
import api from '../services/api'


class Venue extends React.Component {

  handleClick = (event) => {
    event.preventDefault();
    api.userVenues.createUserVenues(this.props.currentUser, this.props.venue);
    this.props.addVenueToUser(this.props.venue)
  }

  render() {

    return (
      <div>
        <Row>
          <Card
            className="card"
            title={this.props.venue.name}
            actions={[<Button
                          key={"venue-button-" + this.props.venue.id}
                          onClick={this.handleClick}>
                          Add to My Venues
                        </Button>
                    ]}>
          <p>{this.props.venue.address}
            {", " + this.props.venue.city}
            {", " + this.props.venue.state} {this.props.venue.postalCode}
          </p>
        </Card>
      </Row>

      </div>

    )
  }
}

export default Venue
