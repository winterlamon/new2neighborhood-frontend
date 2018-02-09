import api from "../services/api";

const API_ROOT = `http://localhost:3001`;

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json",
  Authorization: token
};

const searchVenuesByLocation = (lat, lon, radius, selection) => {
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
};
