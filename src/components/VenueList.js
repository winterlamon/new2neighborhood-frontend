import React from 'react';
import {Col, Input, Row, Button} from 'react-materialize'
import Venue from './Venue';
// import {sampleVenues} from '../sampleData';


const VenueList = props => {
  const { venues, buttonHandler, handleChange, 
          address, city, state, zip, radius, section, searched} = props

  const allVenues = venues.map(venue => <Venue key={"venue-" + venue.id.toString()} venue={venue} currentUser={props.currentUser} />)

  return (
    <div>
      {searched ?
        <div className="page-item center">
           <Button>Search Again!</Button>

            <div class='venues'>
              <Row>              
                  {allVenues}
              </Row> 
            </div>
          </div>
          :
        <div className="page-item center">
          <h4>Search Venues</h4>
            <div class='venues'>  
              <Row>
                <Input onChange={handleChange} name="address" className="center" s={12} placeholder="123 Main Street" label="Street" value={address} />
                <Input onChange={handleChange} name="city" className="center" s={6} placeholder="New York" label="City" value={city}/>
                <Input onChange={handleChange} name="state" className="center" s={3} placeholder="NY" label="State" value={state}/>
                <Input onChange={handleChange} name="zip" className="center" s={3} placeholder="10011" label="Zip" value={zip} />
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
                  <Button onClick={buttonHandler} name="Adress">Address</Button>
                </Col>
              </Row>
            </div>
        </div>
        }
      </div>
  )
}


export default VenueList
