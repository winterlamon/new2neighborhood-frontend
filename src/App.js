import React, { Component } from 'react';
import './stylesheets/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VenueList from './components/VenueList';
import NavBar from './components/NavBar';



class App extends Component {
  // state = {
  //   auth: {currentUser: {},
  // }

// handleLogin = (user) => {
//   const currentUser = {currentUser: user};
//   this.setState({auth: currentUser})
// }

// handleLogout = () => {
//   localStorage.
// }


  render() {
    return (
      <div>
        <MuiThemeProvider>
          <NavBar />
          <VenueList />
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
