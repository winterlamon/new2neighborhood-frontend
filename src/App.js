import React, { Component } from 'react';
import './stylesheets/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VenueList from './components/VenueList';
import NavBar from './components/NavBar';



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
      <div>
        <MuiThemeProvider>
          <NavBar />
        <VenueList venues={this.state.venues}/>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
