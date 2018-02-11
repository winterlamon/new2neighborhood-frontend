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
    searchedLocation: {
      lat: null,
      lng: null
    },
    venues: [],
    markers: [],
    searched: false
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
        searchedLocation: {
          lat: null,
          lng: null
        },
        venues: [],
        markers: [],
        searched: false
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
    case "SET_SEARCHED_COORDS":
      return {
        ...state,
        searchedLocation: { lat: action.lat, lng: action.lng }
      };
    case "SET_VENUES":
      return {
        ...state,
        venues: action.venues
      };
    case "SET_MARKERS":
      return {
        ...state,
        markers: action.markers
      };
    case "SET_SEARCHED":
      return { ...state, searched: !state.searched };
    default:
      return state;
  }
}
