import React from 'react';
import {Row, Input, Button} from 'react-materialize'


const Login = () => {
    return (
      <div>
          <Row>
            <Input s={6} label="Email" />
            <Input type="password" label="Password" s={6} />
          </Row>

          <p>Don't have an account? <Button waves='light' node='a' href='/signup'> Sign Up </Button> </p>
      </div>
    )
}

export default Login
