import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './stylesheets/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import DashboardContainer from './containers/DashboardContainer';
import MapContainer from './containers/MapContainer';
// import api from './services/api'

class App extends Component {
  state = {
    auth: {currentUser: {}},
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
  let lat = pos.coords.latitude
  let lng = pos.coords.longitude
  let coords = [lat, lng].join(',')
  this.setState({ coords: coords, lat: lat, lng: lng})
}

componentDidMount() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.setCoords)
  } else {
    alert('This site requires Geolocation! Please reload and try again')
  }
  // api.venues.searchVenues
}

  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={Home} />
          <Route exact path="/home" render={Home} />
          
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
          
          <Route exact path="/signup" render={Signup} />
          
          <Route 
            exact 
            path= "/dashboard" 
            component={ props =>
              < DashboardContainer 
                {...props}
                coords={this.state.coords}
                lat={this.state.lat}
                lng={this.state.lng}
              />
            }
          />
          
          <Route exact path="/map" component={MapContainer} />
      </div>
    </Router>
    );
  }
}

export default App;
