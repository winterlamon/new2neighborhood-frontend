import React, { Component } from 'react';
import './stylesheets/App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VenueList from './components/VenueList';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import UserContainer from './containers/UserContainer';




class App extends Component {
  state = {
    venues: []
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
}


getVenues = () => {
  fetch('http://localhost:3000/venues')
    .then(res => res.json())
    .then(venues => this.setState({venues}))
}


  render() {
    return (
      <Router>
        <div>
        <NavBar />
        <Route exact path="/" render={() => <h1>Welcome to New2Neighborhood</h1>} />
        <Route exact path="/about" render={About} />
        <Route exact path="/login" render={Login} />
        <Route exact path="/dashboard" render={UserContainer} />
        <VenueList venues={this.state.venues}/>
      </div>
    </Router>
    );
  }
}

export default App;
