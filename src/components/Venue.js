import React from 'react';
import {Button, Card, Row} from 'react-materialize'
import api from '../services/api'


const Venue = (props) => {
    return (
      <div>
        <Row>
          <Card
            className="card"
            title={props.venue.name}
            actions={[<Button
                          key={"venue-button-" + props.venue.id}
                          onClick={() => api.userVenues.createUserVenues(props.currentUser, props.venue)}>
                          Add to My Venues
                        </Button>
                    ]}>
          <p>{props.venue.address}
            {", " + props.venue.city}
            {", " + props.venue.state} {props.venue.postalCode}
          </p>
        </Card>
      </Row>

      </div>

    )
}

export default Venue
