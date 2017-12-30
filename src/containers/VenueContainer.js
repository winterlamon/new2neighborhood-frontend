import React from 'react';
import VenueList from '../components/VenueList';
import api from '../services/api';

class VenueContainer extends React.Component {
  state = {
    venues: [],
    coords: this.props.coords,
    lat: this.props.lat,
    lng: this.props.lng,
    radius: '1',
    section: 'food'
  }

  getVenues = () => {
    api.venues.searchVenues(
      this.state.lat.toString(), 
      this.state.lng.toString(), 
      this.state.radius, 
      this.state.section
    )
      .then(d => {
        this.setState({
          venues: d
        })
      })
    
  }

  buttonHandler = event => {
    if(event.target.name === "Location") {
      this.getVenues()
    }
  }

  render() {
    console.log('venues', this.state.venues)
    return (
      <div>
        <VenueList 
          venues={this.state.venues}
          buttonHandler={this.buttonHandler} 
          lat={this.state.lat} 
          lng={this.state.lng}
        />
      </div>
    )
  }
}

export default VenueContainer
