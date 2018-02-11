export function authReducer(
  state = {
    loading: true,
    currentUser: {
      id: null,
      first_name: null,
      last_name: null,
      username: null,
      venues: [],
      token: null,
      lat: null,
      lng: null
    },
    currentLocation: {
      address: null,
      city: null,
      state: null,
      zip: null,
      lat: null,
      lng: null,
      radius: null,
      section: "food",
      searched: null
    },
    venues: [],
    markers: []
  },
  action
) {
  switch (action.type) {
    case "CREATE_USER":
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          id: action.user.id,
          first_name: action.user.first_name,
          last_name: action.user.last_name,
          username: action.user.username,
          venues: action.user.venues,
          token: action.user.token
        },
        currentLocation: { ...state.currentLocation }
      };
    case "LOG_OUT_USER":
      return {
        ...state,
        currentUser: {
          id: null,
          first_name: null,
          last_name: null,
          username: null,
          venues: [],
          token: null,
          lat: null,
          lng: null
        },
        currentLocation: {
          address: null,
          city: null,
          state: null,
          zip: null,
          lat: null,
          lng: null,
          radius: null,
          section: "food",
          searched: null
        },
        venues: [],
        markers: []
      };
    case "SET_CURRENT_LOCATION":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          lat: parseFloat(action.pos.coords.latitude),
          lng: parseFloat(action.pos.coords.longitude)
        }
      };
    default:
      return state;
  }
}
