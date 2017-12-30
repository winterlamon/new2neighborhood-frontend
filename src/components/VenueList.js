import React from 'react';
import {Col, Input, Row, Button} from 'react-materialize'
import Venue from './Venue';
// import {sampleVenues} from '../sampleData';


const VenueList = props => {
  const {venues, buttonHandler, handleChange, radius, section} = props

  const allVenues = venues.map(venue => <Venue key={venue.id.toString()} venue={venue}/>)

  return (
      <div className="page-item center">
        <h3>Venues</h3>
        <div>
          <Row>
            <Input className="center" s={12} placeholder="123 Main Street" label="Street" value="" />
            <Input className="center" s={6} placeholder="New York" label="City" value="" />
            <Input className="center" s={3} placeholder="NY" label="State" value="" />
            <Input className="center" s={3} placeholder="10011" label="Zip" value="" />
          </Row>
          <Row>
            <Col s={6}>
            	<Input s={12} onChange={handleChange} name="radius" type='select' label="Distance" value={radius}>
            		<option value='1'>1 mile</option>
                <option value='5'>5 miles</option>
                <option value='10'>10 miles</option>
                <option value='25'>25 miles</option>
                <option value='50'>50 miles</option>
            	</Input>
            </Col>
            <Col s={6}>
              <Input s={12} onChange={handleChange} name="section" type='select' label="Search for" value={section}>
                <option value='food'>Food</option>
                <option value='drinks'>Drinks</option>
              </Input>
            </Col>
          </Row>
          <Row>
            <p>Search by current location or by an address</p>
            <Col offset="s3">
              <Button onClick={buttonHandler} name="Location">Location</Button>
            </Col>
            <Col>
              <Button>Address</Button>
            </Col>
          </Row>
        </div>
        {allVenues}
      </div>
    )
}


export default VenueList
