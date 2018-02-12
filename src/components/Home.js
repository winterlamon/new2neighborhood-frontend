import React from "react";
import { Button, Col, Row } from "react-materialize";

const Home = () => {
  return (
    <Row>
      <Col s={2} />
      <Col s={8} className="page-item center">
        <h1>Welcome to the Neighborhood!</h1>
        <div className="page-item">
          <p>
            Did you recently move to a new neighborhood? Visiting a new city?{" "}
            <strong>
              <em>New2Neighborhood</em>
            </strong>{" "}
            is here to help!
          </p>
          <p>
            <strong>
              <em>New2Neighborhood</em>
            </strong>{" "}
            allows you to search for bars and restaurants using either your
            current location or by setting an address. When you've found a venue
            that strikes your fancy, you can save it to a list of venues for you
            to explore at your leisure. Think of it as your food and drink to-do
            list! Once you have visited a venue, you can mark it off and pat
            yourself on the back for your successful gastro expedition. Cheers
            to you, young explorer!
          </p>
        </div>
        <div>
          <Row className="center">
            <Col s={2} />
            <Col s={4} className="center">
              <Button className="center" waves="light" node="a" href="/signup">
                Get Started
              </Button>
            </Col>
            <Col s={4} className="center">
              <Button waves="light" node="a" href="/login">
                Log In
              </Button>
            </Col>
            <Col s={2} />
          </Row>
        </div>
      </Col>
      <Col s={2} />
    </Row>
  );
};

export default Home;
