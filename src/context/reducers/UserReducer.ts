import * as types from "../actions/ActionTypes";
import InitialState from "./InitialState";

export default function userReducer(state = InitialState.user, action: any) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.user;
    case types.LOGIN_FAIL:
      return null;
    case types.USER_LOGOUT:
      return action.user;
    default:
      return state;
  }
}
