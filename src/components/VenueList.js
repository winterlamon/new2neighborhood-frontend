import React from 'react';

class VenueList extends React.Component {
  // state = {
  //   venues = []
  // }
  //
  // componentDidMount = () => (
  //   this.getVenues
  // )
  //
  //
  // getVenues = () => {
  //   fetch('http://localhost:3000/venues')
  //     .then(res => res.json())
  //     .then(venues => this.setState({venues}))
  // }

  render() {
    return (
      <div>
        <h3>Venue List</h3>
        <ul>
          <li>I'm a venue!</li>
          <li>I'm a venue!</li>
          <li>I'm a venue!</li>
          <li>I'm a venue!</li>
          <li>I'm a venue!</li>
        </ul>
      </div>
    )
  }
}

export default VenueList
