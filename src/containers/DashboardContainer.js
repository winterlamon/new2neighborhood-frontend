import React from 'react';
import {Col, Row} from 'react-materialize'
import VenueContainer from './VenueContainer'
import UserContainer from './UserContainer'


const DashboardContainer = (props) => {

    return (
      <div>
        <Row>
        <div>
          <Col s={6}>
            <UserContainer currentUser={props.currentUser}/>
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
