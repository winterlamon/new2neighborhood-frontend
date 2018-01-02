const API_ROOT = `http://localhost:3001`;

const token = localStorage.getItem('token');

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    Authorization: token
}

const searchVenuesByLocation = (lat, lon, radius, selection) => {
    return(
        fetch(`${API_ROOT}/venues`,
            {method: 'POST',
            headers: headers,
            body: JSON.stringify({lat: lat, lon: lon, radius: radius, selection: selection})
        }).then(res => res.json())
    )
}

const searchVenuesByAddress = (address, city, state, zip, radius, selection) => {
    return(
        fetch(`${API_ROOT}/venues`,
            {method: 'POST',
            headers: headers,
            body: JSON.stringify({address: address, city: city, state: state, zip: zip, radius: radius, selection: selection})
        }).then(res => res.json())
    )
}

const login = (username, password) => {
    return fetch(`${API_ROOT}/auth`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ username, password })
    }).then(res => res.json())
  };

  const signup = (firstName, lastName, username, password) => {
      return fetch(`${API_ROOT}/users`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ firstName, lastName, username, password })
      })
      // .then(res => res.json())
      // .then(console.log)
    };

  const getCurrentUser = () => {
    return fetch(`${API_ROOT}/current_user`, {
      headers: headers
    }).then(res => res.json());
  };

  const createUserVenues = (user, venue) => {
    return fetch(`${API_ROOT}/user_venues`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({user_id: user.id, venue_id: venue.id})
    // }).then(res => res.json())
    })
  }

  const updateUserVenues = (userVenue, visited) => {
    return fetch(`${API_ROOT}/user_venues/${userVenue.id}`, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify({visited: visited})
    // }).then(res => res.json())
    })
  }


  const getUserVenues = (user) => {
    return fetch(`${API_ROOT}/users/${user.id}`)
      .then(res => res.json())
      .then(console.log)
  }

export default {
    auth: {
        login,
        token,
        getCurrentUser,
        signup
    },
    venues: {
        searchVenuesByAddress,
        searchVenuesByLocation
    },
    userVenues: {
        createUserVenues,
        updateUserVenues,
        getUserVenues
    }
}
