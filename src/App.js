import React, { Component } from 'react';
import './stylesheets/App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';

import DashboardContainer from './containers/DashboardContainer';


class App extends Component {
  state = {
    venues: [],
    user: []
  }

// handleLogin = (user) => {
//   const currentUser = {currentUser: user};
//   this.setState({auth: currentUser})
// }

// handleLogout = () => {
//   localStorage.
// }

componentDidMount = () => {
  this.getVenues()
  this.getUsers()
}


getVenues = () => {
  fetch('http://localhost:3000/venues')
    .then(res => res.json())
    .then(venues => this.setState({venues}))
}

getUsers = () => {
  fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users => this.setState({users}))
}


  render() {
    return (
      <Router>
        <div>
            <NavBar />
            <Route exact path="/" render={() => <h1>Welcome to New2Neighborhood</h1>} />
            <Route exact path="/about" render={About} />
          <Route exact path="/login" render={Login} className="login"/>
            <Route exact path="/signup" render={Signup} />
          <Route exact path="/dashboard" render={DashboardContainer} />
      </div>
    </Router>
    );
  }
}

export default App;
