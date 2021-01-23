import React, { useReducer, useContext } from "react";
import InitialState from "../reducers/InitialState";
import {
  getDrinksByIngredient,
  getFavedDrinks,
  getDrinkById,
} from "../../api/drinksApi";
import * as types from "../actions/ActionTypes";

interface IDrink {
  idDrink: number;
  strDrink: string;
  strAlcoholic: string;
  strInstructions: string;
  strDrinkThumb: string;
  ingredients: string[];
  measures: string[];
  path: string;
}

type Action =
  | { type: "getAllDrinksByIngredient"; payload: any }
  | { type: "getAllFavDrinks"; payload: any }
  | { type: "getDrinkById"; payload: any };
type Dispatch = (action: Action) => void;
type State = {
  drinks: Array<any>;
  usersDrinks: Array<any>;
  user: { username: string; password: string };
  selectedDrink: IDrink;
};
type DrinksProviderProps = { children: React.ReactNode };

const DrinksContext = React.createContext<State | undefined>(undefined);
const DrinksDispatch = React.createContext<Dispatch | undefined>(undefined);

function drinksReducer(state: State, action: Action) {
  switch (action.type) {
    case types.LOAD_DRINKS:
      return {
        ...state,
        drinks: action.payload,
      };
    case types.LOAD_USER_DRINKS:
      return {
        ...state,
        usersDrinks: action.payload,
      };
    case types.LOAD_DRINK_BY_ID:
      return {
        ...state,
        selectedDrink: action.payload,
      };
    default:
      return state;
  }
}

function DrinksWrapper({ children }: DrinksProviderProps) {
  const [state, dispatch] = useReducer(drinksReducer, InitialState);

  return (
    <DrinksContext.Provider value={state}>
      <DrinksDispatch.Provider value={dispatch}>
        {children}
      </DrinksDispatch.Provider>
    </DrinksContext.Provider>
  );
}

function useDrinksContext() {
  const drinksContext = useContext(DrinksContext);
  if (drinksContext === undefined) {
    throw new Error(
      "useDrinksContext must be used within an DrinksContextProvider"
    );
  }
  return drinksContext;
}

function useDrinksActions() {
  const drinksDispatch = useContext(DrinksDispatch);
  if (drinksDispatch === undefined) {
    throw new Error(
      "useDrinksDispatch must be used within an DrinksDispatchProvider"
    );
  }
  return drinksDispatch;
}

async function loadDrinksByUserId(dispatch: any, userId: number) {
  try {
    const response = await getFavedDrinks(userId).then((res) => {
      return res;
    });

    dispatch({ type: types.LOAD_USER_DRINKS, payload: response });
  } catch (error) {
    console.log(error);
  }
}

async function loadDrinksByIngredient(dispatch: any, ingredient: string) {
  try {
    const response = await getDrinksByIngredient(ingredient).then((res) => res);

    dispatch({ type: types.LOAD_DRINKS, payload: response });
  } catch (error) {
    console.log(error);
  }
}

async function loadDrinkById(dispatch: any, drinkId: number) {
  try {
    const response = await getDrinkById(drinkId).then((res) => res);

    dispatch({ type: types.LOAD_DRINK_BY_ID, payload: response });
  } catch (error) {
    console.log(error);
  }
}

export {
  DrinksWrapper,
  useDrinksContext,
  useDrinksActions,
  loadDrinksByUserId,
  loadDrinksByIngredient,
  loadDrinkById,
};
