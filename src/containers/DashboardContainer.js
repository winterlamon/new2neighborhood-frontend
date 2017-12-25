import React from 'react';
import VenueContainer from './VenueContainer'
import UserContainer from './UserContainer'

import {Col, Row} from 'react-materialize'


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
