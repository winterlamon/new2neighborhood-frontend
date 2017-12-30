const API_ROOT = `http://localhost:3001/`;

const token = localStorage.getItem('token');

const headers = {
    'Content-Type': 'application/json', 
    Accepts: 'application/json',
    Authorization: token
}

const searchVenues = (lat, lon, radius, selection) => {
    return(
    fetch(`${API_ROOT}/venues`, 
        {method: 'POST', 
        headers: headers,
        body: JSON.stringify({lat: lat, lon: lon, radius: radius, selection: selection})
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

  const getCurrentUser = () => {
    return fetch(`${API_ROOT}/current_user`, {
      headers: headers
    }).then(res => res.json());
  };


export default {
    auth: {
        login,
        getCurrentUser
    },
    venues: { 
        searchVenues 
    }
}