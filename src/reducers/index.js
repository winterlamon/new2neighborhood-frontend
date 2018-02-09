export function authreducer(
  state = {
    loading: true,
    currentUser: {
      id: null,
      first_name: null,
      last_name: null,
      username: null,
      venues: [],
      token: null
    }
  },
  action
) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state };
    default:
      return state;
  }
}
