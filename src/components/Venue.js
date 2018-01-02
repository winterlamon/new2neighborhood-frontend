import React from 'react';
import {Button, Card, Row} from 'react-materialize'

const Venue = (props) => {
    return (
      <div>
        <Row>
          <Card
            className="card"
            title={props.venue.name}  
            actions={[<Button>Add to List</Button>]}>
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
