import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import { Col, Row } from "react-materialize";
import VenueContainer from "./VenueContainer";
import MapContainer from "./MapContainer";
import UserContainer from "./UserContainer";
import swal from "sweetalert";

class DashboardContainer extends React.Component {
  state = {
    address: "",
    city: "",
    state: "",
    zip: "",
    radius: "1",
    section: "food"
  };

  validate = () => {
    let messages = [];
    if (this.state.address === "") {
      messages.push("• Address can't be blank!");
    }
    if (this.state.city === "") {
      messages.push("• City can't be blank!");
    }
    if (this.state.state === "") {
      messages.push("• State can't be blank!");
    }
    if (!/^[A-Za-z]{2}$/.test(this.state.state)) {
      messages.push("• State must be an abbreviation of 2 characters!");
    }
    if (this.state.zip === "") {
      messages.push("• Zip can't be blank!");
    }
    if (!/^[0-9]{5}$/.test(this.state.zip)) {
      messages.push("• Zip must be 5 digits in length!");
    }
    return messages;
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
    let messages = this.validate();
    if (messages.length > 0) {
      swal("Oh No!", messages.join("\r\n"));
    } else {
      this.props.searchVenuesByAddress(
        this.state.address,
        this.state.city,
        this.state.state,
        this.state.zip,
        this.state.radius,
        this.state.section
      );
      this.props.setSearched();
    }
  };

  buttonHandler = event => {
    if (event.target.name === "Location") {
      this.props.setSearched();
      this.getVenuesByLocation();
    } else if (event.target.name === "searchAgain") {
      this.props.setSearched();
      this.props.clearMarkers();
    } else {
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
