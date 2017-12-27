import React from 'react';
import {Col, Row} from 'react-materialize'
import VenueContainer from './VenueContainer'
import UserContainer from './UserContainer'



const DashboardContainer = () => {

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
            <VenueContainer />
        </Col>
        </div>
      </Row>
      </div>
    )
}

export default DashboardContainer
