import React from 'react';
import {Button, Col, Row, Input} from 'react-materialize'


const Signup = () => {
    return (
      <div>
            <Row>
                <Col s={3}></Col>
              <Col s={6} className="page-item center">
                <h3>Create an Account</h3>
                <Row className="center">
                  <Input s={6} className="center" label="First Name" />
                  <Input s={6} className="center" label="Last Name" />
                  <Input s={6} className="center" type="email" label="Email" />
                  <Input s={6} className="center" type="password" label="Password" />
                  <Button waves='light' node='a'>Create Account</Button>
                </Row>
                  <Row className="center">
                  </Row>
                  <Row className="center">
                    <p>Already have an account?</p> <Button waves='light' node='a' href='/login'>Log In</Button>
                  </Row>
                </Col>
                <Col s={3}></Col>
            </Row>
      </div>
    )
}

export default Signup
