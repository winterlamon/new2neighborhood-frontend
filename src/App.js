import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import './stylesheets/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import DashboardContainer from './containers/DashboardContainer';
import MapContainer from './containers/MapContainer';
import api from './services/api'


class App extends Component {
  state = {
    auth: {
      currentUser: {}},
    venues: [],
    user: [],
    lat: '',
    lng: ''
  }

handleLogin = user => {
  const currentUser = {currentUser: user};
  localStorage.setItem('token', user.token);
  this.setState({auth: currentUser});
  this.getCoords()
}

handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ auth: { currentUser: {} } });
  };

// handleSignup = user => {
//   console.log('handleSignup in APP')
//   const currentUser = {currentUser: user};
//   localStorage.setItem('token', user.token);
//
//   this.setState({auth: currentUser})
// }

addVenueToUser = (venue) => {
  const newVenues = this.state.auth.currentUser.venues.push(venue)
  this.setState({[this.state.auth.currentUser.venues]: newVenues });
}

setCoords = (pos) => {
  let lat = pos.coords.latitude
  let lng = pos.coords.longitude
  this.setState({ lat: lat, lng: lng})
}

getCoords = () => {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.setCoords)
  } else {
  alert('This site requires Geolocation! Please reload and try again.')
  }
}


componentDidMount() {
  if(api.auth.token) {
    api.auth.getCurrentUser()
    .then(d =>
      this.setState({ auth: {currentUser: d}}, this.getCoords))
    // .then(() => this.props.history.push('/dashboard'))
  } else if(this.state.auth.currentUser.id) {
    this.getCoords()
  }
}

  render() {
    const loggedIn = !!this.state.auth.currentUser.id;

    return (
      <Router>
        <div>
          <NavBar
            currentUser={this.state.auth.currentUser}
            handleLogout={this.handleLogout}
          />
          <Route exact path="/"
          component={ props => {
            return loggedIn ? <Redirect to="/dashboard"/> : <Home />
          }}
         />
          <Route
            exact
            path="/login"
            component={ props => {
              return loggedIn ? <Redirect to="/dashboard"/> :
              <Login
                {...props}
                handleLogin={this.handleLogin}
                currentUser={this.state.auth.currentUser}
              />
            }}
          />
          <Route
            exact
            path="/signup"
            component={ props =>
              <Signup
                {...props}
                handleSignup={api.auth.signup}
                currentUser={this.state.auth.currentUser}
              />
            }
          />
          <Route
            exact
            path="/dashboard"
            component={ props => {
              return loggedIn ?
              (
                <DashboardContainer
                {...props}
                venues={this.state.venues}
                currentUser={this.state.auth.currentUser}
                addVenueToUser={this.addVenueToUser}
                coords={this.state.coords}
                lat={this.state.lat}
                lng={this.state.lng}
                getCoords={this.getCoords}
              />
              ) : (
              <Redirect to="/login"/>
              )
            }}
          />
          <Route exact path="/map" component={MapContainer} />
      </div>
    </Router>
    );
  }
}

export default withRouter(App);
