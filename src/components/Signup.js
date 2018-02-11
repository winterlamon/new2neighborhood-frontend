import React from "react";
import { Button, Col, Row, Input } from "react-materialize";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";

class Signup extends React.Component {
  state = {
    error: false,
    fields: {
      firstName: "",
      lastName: "",
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
    this.props.signup(this.state.fields).then(res => {
      if (res.error) {
        this.setState({ error: true }, alert(res.error));
      } else {
        this.props.history.push("/dashboard");
        this.props.setCoords();
      }
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col s={3} />
          <Col s={6} className="page-item center">
            <h3>Create an Account</h3>
            <Row className="center">
              <Input
                s={6}
                name="firstName"
                className="center"
                label="First Name"
                value={this.state.fields.firstName}
                onChange={this.handleChange}
              />
              <Input
                s={6}
                name="lastName"
                className="center"
                label="Last Name"
                value={this.state.fields.lastName}
                onChange={this.handleChange}
              />
              <Input
                s={6}
                name="username"
                className="center"
                type="email"
                label="Email"
                value={this.state.fields.username}
                onChange={this.handleChange}
              />
              <Input
                s={6}
                name="password"
                className="center"
                type="password"
                label="Password"
                value={this.state.fields.password}
                onChange={this.handleChange}
              />
              <Button waves="light" node="a" onClick={this.handleSubmit}>
                Create Account
              </Button>
            </Row>
            <Row className="center" />
            <Row className="center">
              <p>Already have an account?</p>{" "}
              <Button waves="light" node="a" href="/login">
                Log In
              </Button>
            </Row>
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
  )(Signup)
);
