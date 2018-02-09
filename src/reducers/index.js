// state = {
//   auth: {
//     currentUser: {}
//   },
//   venues: [],
//   user: [],
//   lat: "",
//   lng: ""
// };
//
// state = {
//   venues: this.props.venues,
//   markers: [],
//   lat: this.props.lat,
//   lng: this.props.lng,
//   address: "",
//   city: "",
//   state: "",
//   zip: "",
//   radius: "1",
//   section: "food",
//   searched: false
// };
//
// state = {
//   error: false,
//   fields: {
//     username: "",
//     password: ""
//   }
// };
//
// state = {
//   error: false,
//   fields: {
//     firstName: "",
//     lastName: "",
//     username: "",
//     password: ""
//   }
// };
//
// state = {
//   userVenue: this.props.userVenue,
//   user: this.props.user,
//   visited: false
// };

export function authReducer(
  state = {
    loading: true,
    currentUser: {
      id: null,
      first_name: null,
      last_name: null,
      username: null,
      venues: [],
      token: null
    },
    currentLocation: {
      address: null,
      city: null,
      state: null,
      zip: null,
      lat: "",
      lng: "",
      radius: null,
      section: "food",
      searched: null
    }
  },
  action
) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.user,
        currentLocation: { ...state.currentLocation }
      };
    case "CREATE_USER":
      return { ...state, currentUser: action.user };
    case "LOG_OUT_USER":
      return {
        ...state,
        currentUser: {
          id: null,
          first_name: null,
          last_name: null,
          username: null,
          venues: [],
          token: null
        },
        currentLocation: {
          address: null,
          city: null,
          state: null,
          zip: null,
          lat: "",
          lng: "",
          radius: null,
          section: "food",
          searched: null
        }
      };
    case "SET_CURRENT_LOCATION":
      return {
        ...state,
        currentLocation: {
          ...state.currentLocation,
          lat: action.pos.coords.latitude,
          lng: action.pos.coords.longitude
        }
      };
    default:
      return state;
  }
}
