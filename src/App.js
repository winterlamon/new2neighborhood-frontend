import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import "./stylesheets/App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DashboardContainer from "./containers/DashboardContainer";
import MapContainer from "./containers/MapContainer";

class App extends Component {
  state = {
    auth: {
      currentUser: {}
    },
    venues: [],
    user: [],
    lat: "",
    lng: ""
  };

  componentDidMount() {
    if (localStorage.token) {
      this.props.getCurrentUser();
      this.props.setCoords();
    }
    // if (localStorage.token && this.props.lat === null) {
    //   this.props.setCoords();
    // }
  }
  render() {
    const loggedIn = !!this.props.currentUser.id;

    return (
      <Router>
        <div>
          <NavBar />
          <Route
            exact
            path="/"
            component={props => {
              return loggedIn ? <Redirect to="/dashboard" /> : <Home />;
            }}
          />
          <Route
            exact
            path="/login"
            component={props => {
              return loggedIn ? (
                <Redirect to="/dashboard" />
              ) : (
                <Login {...props} />
              );
            }}
          />
          <Route
            exact
            path="/signup"
            component={props => <Signup {...props} />}
          />
          <Route
            exact
            path="/dashboard"
            component={props => {
              return loggedIn ? (
                <DashboardContainer {...props} venues={this.props.venues} />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route exact path="/map" component={MapContainer} />
        </div>
      </Router>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      ...state.authReducer
    }),
    actions
  )(App)
);
