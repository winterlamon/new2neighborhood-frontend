import React from 'react';
import {Button, Col, Input, Modal, Row} from 'react-materialize'


const Login = () => {
    return (
      <div>
        <Row>
            <Col s={3}></Col>
          <Col s={6} className="page-item center" >
            <h3>Welcome Back!</h3>
              <Row>
                <Input s={12} className="center" type="email" label="Email" />
                <Input s={12} className="center" type="password" label="Password" />
              <Button waves='light' node='a'>Log In</Button>
            </Row>
            <Row>
              <Modal
                header='Whoops!'
                fixedFooter
                trigger={<Button waves='light' node='a'>Forgot Password?</Button>}>
                <p>Oh no! Did you really forget your password? That's truly unfortunate. We don't have a way to retrieve your password at the moment. Instead, you'll have to create a new account.</p>
                <p>Maybe this time around you could keep your password in a safe place where you can find it should you forget again.</p>
              </Modal>
              </Row>
              <div>
                <Row>
                </Row>
                <Row>
                  <p>Don't have an account?</p> <Button waves='light' node='a' href='/signup'>Sign Up</Button>
              </Row>
              </div>
            </Col>
            <Col s={3}></Col>
        </Row>

      </div>
    )
}

export default Login
