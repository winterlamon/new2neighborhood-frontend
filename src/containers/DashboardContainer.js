import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import { Col, Row } from "react-materialize";
import VenueContainer from "./VenueContainer";
import MapContainer from "./MapContainer";
import UserContainer from "./UserContainer";

class DashboardContainer extends React.Component {
  state = {
    address: "",
    city: "",
    state: "",
    zip: "",
    radius: "1",
    section: "food"
  };

  getVenuesByLocation = () => {
    this.props.searchVenuesByLocation(
      this.props.currentUser.lat.toString(),
      this.props.currentUser.lng.toString(),
      this.state.radius,
      this.state.section
    );
  };

  getVenuesByAddress = () => {
    this.props.searchVenuesByAddress(
      this.state.address,
      this.state.city,
      this.state.state,
      this.state.zip,
      this.state.radius,
      this.state.section
    );
  };

  buttonHandler = event => {
    if (event.target.name === "Location") {
      this.props.setSearched();
      this.getVenuesByLocation();
    } else if (event.target.name === "searchAgain") {
      this.props.setSearched();
      this.props.clearMarkers();
    } else {
      this.props.setSearched();
      this.getVenuesByAddress();
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <Row>
          <div>
            <Col s={6}>
              <VenueContainer
                buttonHandler={this.buttonHandler}
                handleChange={this.handleChange}
                address={this.state.address}
                city={this.state.city}
                state={this.state.state}
                zip={this.state.zip}
                radius={this.state.radius}
                section={this.state.section}
              />
            </Col>
          </div>
          <div>
            <Col s={6}>
              <Row>
                <MapContainer />
              </Row>
              <Row>
                <UserContainer />
              </Row>
            </Col>
          </div>
        </Row>
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      ...state.authReducer
    }),
    actions
  )(DashboardContainer)
);
