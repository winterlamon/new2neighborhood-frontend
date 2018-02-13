import React from "react";
import { Button, Row, Col, Input } from "react-materialize";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import swal from "sweetalert";

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

  validate = () => {
    let messages = [];
    if (this.state.fields.firstName === "") {
      messages.push("• First Name can't be blank!");
    }
    if (this.state.fields.lastName === "") {
      messages.push("• Last Name can't be blank!");
    }
    if (this.state.fields.email === "") {
      messages.push("• Email can't be blank!");
    }
    if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.state.fields.email
      )
    ) {
      messages.push("• Must be a valid email!");
    }
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.state.fields.password)
    ) {
      messages.push(
        "• Password must be a minimum of 8 characters in length, and contain at least one letter and number!"
      );
    }
    return messages;
  };

  handleSubmit = event => {
    event.preventDefault();
    let messages = this.validate();
    if (messages.length > 0) {
      swal("Oh No!", messages.join("\r\n"));
    } else {
      console.log("will submit");
      // this.props.signup(this.state.fields).then(res => {
      //   if (res.error) {
      //     this.setState({ error: true }, swal(res.error));
      //   } else {
      //     this.props.history.push("/dashboard");
      //     this.props.setCoords();
      //   }
      // });
    }
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
