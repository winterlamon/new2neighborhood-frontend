import React from 'react';
import {Button, Col, Input, Modal, Row} from 'react-materialize'
import api from '../services/api'

class Login extends React.Component {
  state ={
    error: false,
    fields: {
      username: '', 
      password: ''
    }
    
  }
  handleChange = event => {
    const newField = {...this.state.fields, [event.target.name]: event.target.value}
    this.setState({ fields: newField })
  }

  handleSubmit = event => {
    event.preventDefault();
    api.auth.login(this.state.fields.username, this.state.fields.password)
      .then(res => {
        if (res.error) {
          this.setState({ error: true });
        } else {
          this.props.handleLogin(res);
          this.props.history.push('/');
        }
      })
  }

  render(){
    const { fields } = this.state

    return (
      <div>
        <Row>
            <Col s={3}></Col>
          <Col s={6} className="page-item center" >
            <h3>Welcome Back!</h3>
              <Row>
                <Input 
                  s={12} 
                  name="username"
                  className="center" 
                  type="email" 
                  label="Email" 
                  placeholder="email"
                  value={fields.username}
                  onChange={this.handleChange}
                />
                <Input 
                  s={12} 
                  name="password"
                  className="center" 
                  type="password" 
                  label="Password"
                  placeholder="password"
                  value={fields.password}
                  onChange={this.handleChange}               
                />
              <Button onClick={this.handleSubmit} waves='light' node='a'>Log In</Button>
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
}

export default Login
