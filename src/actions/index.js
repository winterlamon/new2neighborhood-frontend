// import api from "../services/api";

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
        localStorage.setItem("token", user.token);
        dispatch({ type: "SET_CURRENT_USER", user });
        return user;
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
        localStorage.setItem("token", user.token);
        dispatch({ type: "CREATE_USER", user });
        return user;
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
      .then(console.log);
    // dispatch({ type: "SET_CURRENT_USER", user });
    // });
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
      .then(console.log)
      .then(d => {
        let markers = d.venues.map(venue => {
          return { lat: venue.lat, lng: venue.lng };
        });
        this.setState({
          venues: d.venues,
          markers: markers
        });
      });
  };
}

export function addVenueToUser(venue) {
  return dispatch => {
    const newVenues = this.state.auth.currentUser.venues.push(venue);
    this.setState({ [this.state.auth.currentUser.venues]: newVenues });
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

// getVenuesByLocation = () => {
//   api.venues
//     .searchVenuesByLocation(
//       this.currentUser.lat.toString(),
//       this.currentUser.lng.toString(),
//       this.state.radius,
//       this.state.section
//     )
//     .then(d => {
//       let markers = d.venues.map(venue => {
//         return { lat: venue.lat, lng: venue.lng };
//       });
//       this.setState({
//         venues: d.venues,
//         markers: markers
//       });
//     });
// };

const getVenuesByAddress = () => {
  this.searchVenuesByAddress(
    this.state.address,
    this.state.city,
    this.state.state,
    this.state.zip,
    this.state.radius,
    this.state.section
  ).then(d => {
    let markers = d.venues.map(venue => {
      return { lat: venue.lat, lng: venue.lng };
    });
    this.setState({
      venues: d.venues,
      lat: d.coords[0],
      lng: d.coords[1],
      markers: markers
    });
  });
};
