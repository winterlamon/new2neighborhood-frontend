import React from 'react';
import {Card, Row, Col, Input, Button} from 'react-materialize'


const Login = () => {
    return (
      <div>
        <Row>
            <Col s={5}></Col>
            <Col>
              <Card>
              <Row>
              <Input label="Email" />
              </Row>
              <Row>
                <Input type="password" label="Password" />
              </Row>
              <Row>
                <p>Don't have an account?</p> <Button className="button" waves='light' node='a' href='/signup'> Sign Up </Button>
              </Row>
            </Card>
            </Col>
            <Col></Col>
        </Row>

      </div>
    )
}

export default Login
