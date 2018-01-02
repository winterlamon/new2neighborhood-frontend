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
  console.log('user in APP handleLogin', user)
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
    .then(d => this.setState({ auth: {currentUser: d}}))
    // .then(() => this.props.history.push('/dashboard')) 
  } else if(this.state.auth.currentUser.id) {
    this.getCoords()
  }
}

  render() {
    const loggedIn = !!this.state.auth.currentUser.id;
    console.log('state', this.state)
    return (    
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
          component={ props => {
            return loggedIn ?
            (
              <DashboardContainer
              {...props}
              currentUser={this.state.auth.currentUser}
              coords={this.state.coords}
              lat={this.state.lat}
              lng={this.state.lng}
            />
            ) : (
            console.log('loggedIn returned false'),
            alert('Whoops! You must be logged in to access the dashboard.'),
            <Redirect to="/login"/>
            )
          }}
        />
        <Route exact path="/map" component={MapContainer} />
    </div>
    );
  }
}

export default withRouter(App);
