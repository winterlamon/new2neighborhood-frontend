import React from 'react';
import {Button, Card, Row} from 'react-materialize'
import api from '../services/api'


const Venue = (props) => {
    return (
      <div>
        <Row>
          <Card
            className="card"
            // header={<CardTitle reveal waves='light'/>}
            title={props.venue.name}
            // reveal={
            //   <div>
            //     <div>
            //       {props.venue.description ? <p>{props.venue.description}</p> : <div></div>}
            //     </div>
            //     <div>
            //       {props.venue.url ? <p><a href={props.venue.url} target="_blank">Visit Website</a></p> : <div></div>}
            //     </div>
            //   </div>
            // }
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
