import React from 'react';
import {Button, Card, Row} from 'react-materialize'

class UserVenue extends React.Component {
  state = {
    visited: false
  }

  handleVisitedClick = (event) => {
    event.preventDefault();
    this.setState({visited: !this.state.visited})
  }

  render() {

    const venue = this.props.userVenue

    return (
      <div>
        <Row>
          <Card
            className="card"
            // header={<CardTitle reveal waves='light'/>}
            title={venue.name}
            // reveal={
            //   <div>
            //     <div>
            //       {props.venue.description ? <p>{props.venue.description}</p> : <div></div>}
            //     </div>
            //     <div>
            //       {props.venue.url ? <p><a href={props.venue.url} target="_blank">Visit Website</a></p> : <div></div>}
            //     </div>
            //   </div>
            // }
            actions={ !this.state.visited ? [<Button onClick={this.handleVisitedClick} >Mark As Visited</Button>] : [<Button onClick={this.handleVisitedClick} >Mark As Not Visited</Button>]}>
          <p>
            { this.state.visited ? <em>"You've been here before."</em> : <em>"You haven't been here yet."</em>}
          </p>
          <p>
            {venue.address}
            {", " + venue.city}
            {", " + venue.state} {venue.postalCode}
          </p>
        </Card>
      </Row>

      </div>

    )
  }
}

export default UserVenue
