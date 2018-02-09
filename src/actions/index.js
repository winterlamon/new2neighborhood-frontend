import api from "../services/api";

const API_ROOT = `http://localhost:3001`;

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json",
  Authorization: token
};

export function login(username, password) {
  return dispatch => {
    return fetch(`${API_ROOT}/auth`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(user => {
        localStorage.setItem("token", user.token);
        dispatch({ type: "SET_CURRENT_USER", user });
        return user;
      });
  };
}

export function signup(firstName, lastName, username, password) {
  return dispatch => {
    return fetch(`${API_ROOT}/users`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ firstName, lastName, username, password })
    })
      .then(res => res.json())
      .then(user => {
        localStorage.setItem("token", user.token);
        dispatch({ type: "CREATE_USER", user });
        dispatch({ type: "SET_CURRENT_USER", user });
        return user;
      });
  };
}

export function getCurrentUser() {
  return dispatch => {
    return fetch(`${API_ROOT}/current_user`, {
      headers: headers
    })
      .then(res => res.json())
      .then(user => {
        dispatch({ type: "SET_CURRENT_USER", user });
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
        lat: lat,
        lon: lon,
        radius: radius,
        selection: selection
      })
    })
      .then(res => res.json())
      .then(console.log);
  };
}

// handleLogin = user => {
//   const currentUser = { currentUser: user };
//   localStorage.setItem("token", user.token);
//   this.setState({ auth: currentUser });
//   this.getCoords();
// };

// handleLogout = () => {
//   localStorage.removeItem("token");
//   this.setState({ auth: { currentUser: {} } });
// };

export function addVenueToUser(venue) {
  return dispatch => {
    const newVenues = this.state.auth.currentUser.venues.push(venue);
    this.setState({ [this.state.auth.currentUser.venues]: newVenues });
  };
}

export function setCoords(pos) {
  return dispatch => {
    dispatch({ type: "SET_CURRENT_LOCATION", pos });
  };
}

export function getCoords(coords) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(coords);
  } else {
    alert("This site requires Geolocation! Please reload and try again.");
  }
}
