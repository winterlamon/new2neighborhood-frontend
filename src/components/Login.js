import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import { Button, Col, Input, Modal, Row } from "react-materialize";

class Login extends React.Component {
  state = {
    error: false,
    fields: {
      username: "",
      password: ""
    }
  };

  handleChange = event => {
    const newField = {
      ...this.state.fields,
      [event.target.name]: event.target.value
    };
    this.setState({ fields: newField });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.fields).then(res => {
      if (res.error) {
        this.setState({ error: true }, alert(res.error));
      } else {
        this.props.history.push("/dashboard");
        this.props.setCoords();
      }
    });
  };

  render() {
    const { fields } = this.state;

    return (
      <div>
        <Row>
          <Col s={3} />
          <Col s={6} className="page-item center">
            <h3>Welcome Back!</h3>
            <Row className="center">
              <Input
                s={12}
                name="username"
                className="center"
                type="email"
                label="Email"
                value={fields.username}
                onChange={this.handleChange}
              />

              <Input
                s={12}
                name="password"
                className="center"
                type="password"
                label="Password"
                value={fields.password}
                onChange={this.handleChange}
              />

              <Button onClick={this.handleSubmit} waves="light" node="a">
                Log In
              </Button>
            </Row>
            <Row>
              <Modal
                header="Whoops!"
                fixedFooter
                trigger={
                  <Button waves="light" node="a">
                    Forgot Password?
                  </Button>
                }
              >
                <p>
                  Oh no! Did you really forget your password? That's truly
                  unfortunate. We don't have a way to retrieve your password at
                  the moment. Instead, you'll have to create a new account.
                </p>
                <p>
                  Maybe this time around you could keep your password in a safe
                  place where you can find it should you forget again.
                </p>
              </Modal>
            </Row>
            <div>
              <Row />
              <Row>
                <p>Don't have an account?</p>{" "}
                <Button waves="light" node="a" href="/signup">
                  Sign Up
                </Button>
              </Row>
            </div>
          </Col>
          <Col s={3} />
        </Row>
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      ...state.authReducer
    }),
    actions
  )(Login)
);
