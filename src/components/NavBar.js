import React from "react";
import { Navbar, NavItem } from "react-materialize";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class NavBar extends React.Component {
  handleClick = event => {
    event.preventDefault();
  };

  render() {
    const loggedIn = !!this.props.currentUser.id;

    return (
      <div>
        <Navbar
          className="grey darken-4 logo navbar"
          brand="New2Neighborhood"
          right
        >
          {loggedIn ? (
            <div>
              <NavItem
                onClick={() => {
                  this.props.history.push("/login");
                  this.props.logoutUser();
                }}
              >
                Log Out
              </NavItem>
            </div>
          ) : (
            <div>
              <NavItem href="/">Home</NavItem>
              <NavItem href="/signup">Sign Up</NavItem>
              <NavItem href="/login">Log In</NavItem>
            </div>
          )}
        </Navbar>
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
  )(NavBar)
);
