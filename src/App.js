import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './stylesheets/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
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
      </div>
    </Router>
    );
  }
}

export default App;
