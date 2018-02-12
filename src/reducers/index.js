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
          id: action.userdata.id,
          first_name: action.userdata.first_name,
          last_name: action.userdata.last_name,
          username: action.userdata.email,
          token: action.userdata.token,
          venues: action.userdata.venues
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
          token: null,
          venues: [],
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
    case "ADD_USER_VENUE":
      return {
        ...state,
        currentUser: { ...state.currentUser, venues: action.userdata }
      };
    case "UPDATE_USER_VENUE":
      return {
        ...state,
        currentUser: { ...state.currentUser, venues: action.userdata }
      };
    case "REMOVE_USER_VENUE":
      return {
        ...state,
        currentUser: { ...state.currentUser, venues: action.userdata }
      };
    default:
      return state;
  }
}
