import React from 'react';
import {Button, Col, Row} from 'react-materialize';
import api from '../services/api';

const Home = () => {
  // TESTING FETCHES TO API...REMOVE ME!!!
  const fetchVenue = () => {
    fetch('http://localhost:3001/auth', {
      method: 'post',
      headers: {'Content-Type': 'application/json', Accepts: 'application/json'},
      body: JSON.stringify({'username': 'jordan@storms.com', 'password': '123'})
    })
    .then(res => res.json())
    .then(console.log)
  }
  const lat = '40.7'
  const lon = '-74.0'
  const radius='5'
  const section='drinks'

  const testVenues = () => {
    api.venues.searchVenues(lat, lon, radius, section)
  }

  return (
    <Row>
      <Col s={2}></Col>
    <Col s={8} className="page-item center">
        <h1>Welcome to the Neighborhood!</h1>
        <p>
          Did you recently move to a new neighborhood? Visiting a new city? <strong><em>New2Neighborhood</em></strong> is here to help!
        </p>
        <p>
          When I started Reynholm Industries, I had just two things in my possession: a dream and 6 million pounds. He's had quite an evening. Someone stole his wheelchair. Did you see who it was? Red bearded man. You can come down here any time and I'll be waiting for you! [slams down phone] That told her! Dear Sir stroke Madam. Fire, exclamation mark. Fire, exclamation mark. Help me, exclamation mark. 123 Carrendon Road. Looking forward to hearing from you. All the best, Maurice Moss. 0115... no... 0118... no... 0118 999 ... 3. Hello? Is this the emergency services? Then which country am I speaking to? Hello? Hello? No, no, that's the music you heard when it come on.
        </p>
        {/* TEST BUTTON...REMOVE ME*/}
        <Button waves='light' node='a' onClick={testVenues}>Test</Button>
        <div>
          <Row className="center">
            <Col s={3} ></Col>
            <Col s={3} className="center">
                <Button className="center" waves='light' node='a' href='/signup'>Get Started</Button>
            </Col>
            <Col s={3} className="center">
              <Button waves='light' node='a' href='/login'>Log In</Button>
            </Col>
            <Col s={3} ></Col>
          </Row>
        </div>
      </Col>
      <Col s={2}></Col>
    </Row>
  )
}

export default Home
