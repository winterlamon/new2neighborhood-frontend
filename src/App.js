import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './stylesheets/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import DashboardContainer from './containers/DashboardContainer';
import MapContainer from './containers/MapContainer';

class App extends Component {
  state = {
    venues: [],
    user: [],
    coords: ''
  }

// handleLogin = (user) => {
//   const currentUser = {currentUser: user};
//   this.setState({auth: currentUser})
// }

// handleLogout = () => {
//   localStorage.
// }

// componentDidMount = () => {
//   this.getVenues()
//   // this.getUsers()
// }


// getVenues = () => {
//   fetch('http://localhost:3000/venues')
//     .then(res => res.json())
//     .then(venues => this.setState({venues}))
// }

// getUsers = () => {
//   fetch('http://localhost:3000/users')
//     .then(res => res.json())
//     .then(users => this.setState({users}))
// }


setCoords = (pos) => {
  let coords = [pos.coords.latitude, pos.coords.longitude].join(',')
  this.setState({ coords:  coords})
}

componentDidMount() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.setCoords)
  } else {
    alert('This site requires Geolocation! Please reload and try again')
  }
}

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={Home} />
          <Route exact path="/home" render={Home} />
          <Route exact path="/login" render={Login} />
          <Route exact path="/signup" render={Signup} />
          <Route exact path="/dashboard" render={DashboardContainer} />
          <Route exact path="/map" component={MapContainer} />
      </div>
    </Router>
    );
  }
}

export default App;
