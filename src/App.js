import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
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
      isLoggedIn: false,
      currentUser: {}},
    venues: [],
    user: [],
    coords: '',
    lat: '',
    lng: ''
  }

handleLogin = user => {
  const currentUser = {currentUser: user};
  localStorage.setItem('token', user.token);
  this.setState({auth: currentUser})
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

setCoords = (pos) => {
  let lat = pos.coords.latitude
  let lng = pos.coords.longitude
  let coords = [lat, lng].join(',')
  this.setState({ coords: coords, lat: lat, lng: lng})
}

componentDidMount() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.setCoords)
  } else {
    alert('This site requires Geolocation! Please reload and try again.')
  }
  // api.venues.searchVenues
}

  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
          <NavBar
            currentUser={this.state.auth.currentUser}
            handleLogout={this.handleLogout}
          />
          <Route exact path="/" render={Home} />
          <Route
            exact
            path="/login"
            component={ props =>
              <Login
                {...props}
                handleLogin={this.handleLogin}
                currentUser={this.state.auth.currentUser}
              />
            }
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
            component={ props =>
              // return this.state.auth.isLoggedIn ?
              <DashboardContainer
                {...props}
                currentUser={this.state.auth.currentUser}
                coords={this.state.coords}
                lat={this.state.lat}
                lng={this.state.lng}
              />
            // :
            //   console.log('isLoggedIn returned false')
              // <Redirect to="/login"/>
            }
          />
          <Route exact path="/map" component={MapContainer} />
      </div>
    </Router>
    );
  }
}

export default App;
