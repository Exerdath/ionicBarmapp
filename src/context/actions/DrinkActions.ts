import * as types from "./ActionTypes";
import * as drinksApi from "../../api/drinksApi";
import Drink from "../IDrink";

export function loadDrinks(drinks: any) {
  return { type: types.LOAD_DRINKS, drinks };
}
