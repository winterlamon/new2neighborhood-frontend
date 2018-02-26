const API_ROOT = `https://new2neighborhood-api.herokuapp.com`;

const getHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Accepts: "application/json",
    Authorization: token
  };
};

const searchVenuesByLocation = (lat, lon, radius, selection) => {
  return fetch(`${API_ROOT}/venues`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      lat: lat,
      lon: lon,
      radius: radius,
      selection: selection
    })
  }).then(res => res.json());
};

const searchVenuesByAddress = (
  address,
  city,
  state,
  zip,
  radius,
  selection
) => {
  return fetch(`${API_ROOT}/venues`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      address: address,
      city: city,
      state: state,
      zip: zip,
      radius: radius,
      selection: selection
    })
  }).then(res => res.json());
};

const login = (username, password) => {
  return fetch(`${API_ROOT}/auth`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

const signup = (firstName, lastName, username, password) => {
  return fetch(`${API_ROOT}/users`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ firstName, lastName, username, password })
  });
  // .then(res => res.json())
  // .then(console.log)
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: getHeaders()
  }).then(res => res.json());
};

const createUserVenues = (user, venue) => {
  return fetch(`${API_ROOT}/user_venues`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ user_id: user.id, venue_id: venue.id })
    // }).then(res => res.json())
  });
};

const updateUserVenues = venue => {
  return fetch(`${API_ROOT}/user_venues/${venue.user_venue_id}`, {
    method: "PATCH",
    headers: getHeaders(),
    body: JSON.stringify({ visited: true })
    // }).then(res => res.json())
  });
};

const deleteUserVenues = venue => {
  return fetch(`${API_ROOT}/user_venues/${venue.user_venue_id}`, {
    method: "DELETE",
    headers: getHeaders(),
    body: JSON.stringify(venue)
  })
    .then(res => res.json())
    .then(venues => user.venues);
};

const getUserVenues = user => {
  return fetch(`${API_ROOT}/users/${user.id}`)
    .then(res => res.json())
    .then(console.log);
};

export default {
  auth: {
    token,
    login,
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
    deleteUserVenues,
    getUserVenues
  }
};
