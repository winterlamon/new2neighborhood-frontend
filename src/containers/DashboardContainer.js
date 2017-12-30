import React from 'react';
import {Col, Row} from 'react-materialize'
import VenueContainer from './VenueContainer'
import UserContainer from './UserContainer'



const DashboardContainer = props => {
    return (
      <div>
        <Row>
        <div>
          <Col s={6}>
            <UserContainer />
          </Col>
        </div>
        <div>
          <Col s={6}>
            <VenueContainer 
              coords={props.coords}
              lat={props.lat} 
              lng={props.lng}
            />
        </Col>
        </div>
      </Row>
      </div>
    )
}

export default DashboardContainer
