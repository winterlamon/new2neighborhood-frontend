import React from 'react';
import {Col, Input, Row} from 'react-materialize'
import Venue from './Venue';
import {sampleVenues} from '../sampleData';


const VenueList = () => {

    const allVenues = sampleVenues.map(venue => <Venue venue={venue} />)

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
            	<Input s={12} type='select' label="Distance" defaultValue='1'>
            		<option value='1'>1 mile</option>
                <option value='2'>5 miles</option>
                <option value='3'>10 miles</option>
                <option value='4'>25 miles</option>
                <option value='5'>50 miles</option>
            	</Input>
            </Col>
            <Col s={6}>
              <Input name='category' type='radio' value='food' label='Food' />
              <Input name='category' type='radio' value='drink' label='Drink' />
            </Col>
          </Row>
        </div>
          {allVenues}
      </div>
    )
}


export default VenueList
