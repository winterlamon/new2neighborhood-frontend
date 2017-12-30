import React from 'react';
import {Col, Row} from 'react-materialize'
import VenueContainer from './VenueContainer'
import MapContainer from './MapContainer';
import api from '../services/api';


class DashboardContainer extends React.Component {
  state = {
    venues: [],
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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
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
              lat={this.state.lat} 
              lng={this.state.lng}
              radius={this.state.radius}
              section={this.state.section}
            />
          </Col>
        </div>
        <div>
          <Col s={6}>
            <MapContainer 
              venues={this.state.venues}
              lat={this.state.lat}
              lng={this.state.lng}
            />
          </Col>
        </div>
      </Row>
      </div>
    )
  }
}

export default DashboardContainer
