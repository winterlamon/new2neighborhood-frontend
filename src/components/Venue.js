import React from 'react';
import {Button, Card, CardTitle, Row} from 'react-materialize'

// header={<CardTitle reveal waves='light'/>}

const Venue = (props) => {
    // console.log('venue url from Venue', props.venue.url)
    return (
      <div>
        <Row>
          <Card className="card" header={<CardTitle reveal waves='light'/>}
          title={props.venue.name}
          reveal={
            <div>
              <div>
                {props.venue.description ? <p>{props.venue.description}</p> : <div></div>}
              </div>
              <div>
                {props.venue.url ? <p><a href={props.venue.url} target="_blank">Visit Website</a></p> : <div></div>}
              </div>
            </div>
          }>
          <p>{props.venue.address}
            {", " + props.venue.city}
            {", " + props.venue.state} {props.venue.postalCode}
          </p>
          <Button>Add to List</Button>
        </Card>
      </Row>

      </div>

    )
}

export default Venue
