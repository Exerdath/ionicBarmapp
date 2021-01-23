import * as types from "../actions/ActionTypes";
import InitialState from "./InitialState";

export default function drinksReducer(
  state = InitialState.drinks,
  action: any
) {
  switch (action.type) {
    case types.LOAD_DRINKS:
      return action.drinks;
    default:
      return state;
  }
}
