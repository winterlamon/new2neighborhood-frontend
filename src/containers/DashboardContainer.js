import React from 'react';
import {Col, Row} from 'react-materialize'
import VenueContainer from './VenueContainer'
import MapContainer from './MapContainer';
import UserContainer from './UserContainer';
import api from '../services/api';


class DashboardContainer extends React.Component {
  state = {
    venues: this.props.venues,
    markers: [],
    lat: this.props.lat,
    lng: this.props.lng,
    address: '',
    city: '',
    state: '',
    zip: '',
    radius: '1',
    section: 'food',
    searched: false
  }

  getVenuesByLocation = () => {
    api.venues.searchVenuesByLocation(
      this.state.lat.toString(),
      this.state.lng.toString(),
      this.state.radius,
      this.state.section
    )
    .then(d => {
      let markers = d.venues.map(venue => { return {lat: venue.lat, lng: venue.lng}})
      this.setState({
        venues: d.venues,
        markers: markers
        })
      })
    }

  getVenuesByAddress = () => {
    api.venues.searchVenuesByAddress(
      this.state.address,
      this.state.city,
      this.state.state,
      this.state.zip,
      this.state.radius,
      this.state.section
    )
    .then(d => {
      let markers = d.venues.map(venue => { return {lat: venue.lat, lng: venue.lng}})
      this.setState({
        venues: d.venues,
        lat: d.coords[0],
        lng: d.coords[1],
        markers: markers
        })
      })
    }


  buttonHandler = event => {
    if(event.target.name === "Location") {
      this.handleSearch()
      this.getVenuesByLocation()
    }else if(event.target.name==="searchAgain"){
      this.handleSearch()
      this.props.getCoords()
    } else {
      this.handleSearch()
      this.getVenuesByAddress()
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSearch = () => {
    this.setState({searched: !this.state.searched})
  }

  render() {
    return (
      <div>
        <Row>
        <div>
          <Col s={6}>
            <VenueContainer
              venues={this.state.venues}
              buttonHandler={this.buttonHandler}
              handleChange={this.handleChange}
              address={this.state.address}
              city={this.state.city}
              state={this.state.state}
              zip={this.state.zip}
              lat={this.state.lat}
              lng={this.state.lng}
              radius={this.state.radius}
              section={this.state.section}
              searched={this.state.searched}
              currentUser={this.props.currentUser}
              addVenueToUser={this.props.addVenueToUser}
            />
          </Col>
        </div>
        <div>
          <Col s={6}>
            <Row>
              <MapContainer
                venues={this.state.venues}
                markers={this.state.markers}
                lat={this.state.lat}
                lng={this.state.lng}
              />
              <UserContainer
                currentUser={this.props.currentUser}
              />
            </Row>
          </Col>
        </div>
      </Row>
      </div>
    )
  }
}

export default DashboardContainer
