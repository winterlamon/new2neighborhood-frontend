import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import { Button, Col, Input, Modal, Row } from "react-materialize";
import swal from "sweetalert";

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

  validate = () => {
    let messages = [];
    if (this.state.fields.username === "") {
      messages.push("• Email can't be blank!");
    }
    if (this.state.fields.password === "") {
      messages.push("• Password can't be blank!");
    }
    return messages;
  };

  handleSubmit = event => {
    event.preventDefault();
    let messages = this.validate();
    if (messages.length > 0) {
      swal("Oh No!", messages.join("\r\n"));
    } else {
      this.props.login(this.state.fields);
      this.props.setCoords();
      this.props.history.push("/dashboard");
    }
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
