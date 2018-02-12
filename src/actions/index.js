const API_ROOT = `http://localhost:3001`;

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json",
  Authorization: token
};

export function login({ username, password }) {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });

    return fetch(`${API_ROOT}/auth`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(user => {
        let userdata = user.user;
        localStorage.setItem("token", user.token);
        dispatch({ type: "SET_CURRENT_USER", userdata });
        return userdata;
      });
  };
}

export function signup({ firstName, lastName, username, password }) {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });
    return fetch(`${API_ROOT}/users`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ firstName, lastName, username, password })
    })
      .then(res => res.json())
      .then(user => {
        let userdata = user.user;
        localStorage.setItem("token", user.token);
        dispatch({ type: "CREATE_USER", userdata });
        return userdata;
      });
  };
}

export function getCurrentUser() {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });
    return fetch(`${API_ROOT}/current_user`, {
      headers: headers
    })
      .then(res => res.json())
      .then(user => {
        let userdata = user.user;
        userdata.token = user.token;
        localStorage.setItem("token", user.token);
        dispatch({ type: "SET_CURRENT_USER", userdata });
        return userdata;
      });
  };
}

export function logoutUser() {
  return dispatch => {
    localStorage.removeItem("token");
    dispatch({ type: "LOG_OUT_USER" });
  };
}

export function searchVenuesByLocation(lat, lon, radius, selection) {
  return dispatch => {
    return fetch(`${API_ROOT}/venues`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        lat: lat.toString(),
        lon: lon.toString(),
        radius: radius,
        selection: selection
      })
    })
      .then(res => res.json())
      .then(d => {
        let markers = d.venues.map(venue => {
          return { lat: venue.lat, lng: venue.lng };
        });
        dispatch({ type: "SET_VENUES", venues: d.venues });
        dispatch({ type: "SET_MARKERS", markers: markers });
      });
  };
}

export function searchVenuesByAddress(
  address,
  city,
  state,
  zip,
  radius,
  selection
) {
  return dispatch => {
    fetch(`${API_ROOT}/venues`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        address: address,
        city: city,
        state: state,
        zip: zip,
        radius: radius,
        selection: selection
      })
    })
      .then(res => res.json())
      .then(d => {
        let markers = d.venues.map(venue => {
          return { lat: venue.lat, lng: venue.lng };
        });
        dispatch({
          type: "SET_SEARCHED_COORDS",
          lat: d.coords[0],
          lng: d.coords[1]
        });
        dispatch({ type: "SET_VENUES", venues: d.venues });
        dispatch({ type: "SET_MARKERS", markers: markers });
      });
  };
}

export function setSearched() {
  return dispatch => {
    dispatch({ type: "SET_SEARCHED" });
  };
}

export function setCoords(pos) {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(pos =>
        dispatch({ type: "SET_CURRENT_LOCATION", pos })
      );
    } else {
      alert("This site requires Geolocation! Please reload and try again.");
    }
  };
}

export function setMarkers(markers) {
  return dispatch => {
    dispatch({
      type: "SET_MARKERS",
      markers
    });
  };
}

export function clearMarkers() {
  return dispatch => {
    dispatch({
      type: "CLEAR_MARKERS"
    });
  };
}

export function addVenueToUser(user, venue) {
  return dispatch => {
    return fetch(`${API_ROOT}/user_venues`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ user_id: user.id, venue_id: venue.id })
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(user.error);
        } else {
          let userdata = user.user.venues;
          dispatch({ type: "ADD_USER_VENUE", userdata });
          return userdata;
        }
      });
  };
}

export function updateUserVenue(venue) {
  return dispatch => {
    return fetch(`${API_ROOT}/user_venues/${venue.user_venue_id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({ visited: true })
    })
      .then(res => res.json())
      .then(user => {
        let userdata = user.user.venues;
        dispatch({ type: "ADD_USER_VENUE", userdata });
        return userdata;
      });
  };
}

export function deleteUserVenue(venue) {
  return dispatch => {
    return fetch(`${API_ROOT}/user_venues/${venue.user_venue_id}`, {
      method: "DELETE",
      headers: headers,
      body: JSON.stringify(venue)
    })
      .then(res => res.json())
      .then(user => {
        let userdata = user.user.venues;
        dispatch({ type: "REMOVE_USER_VENUE", userdata });
        return userdata;
      });
  };
}
