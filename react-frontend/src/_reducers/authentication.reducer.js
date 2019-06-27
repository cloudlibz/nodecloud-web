import { userConstants } from "../_constants/user.constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      console.log("REDUCERS SUCCESS", action.user);
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      console.log("REDUCERS FAIL", action);
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
