import * as types from "../actions/ActionTypes";
import InitialState from "./InitialState";

export default function userDrinksReducer(
  state = InitialState.drinks,
  action: any
) {
  switch (action.type) {
    case types.LOAD_USER_DRINKS:
      return action.userDrinks;
    case types.FAVOURITE_DRINK:
      return [...state, { ...action.drink }];
    default:
      return state;
  }
}
