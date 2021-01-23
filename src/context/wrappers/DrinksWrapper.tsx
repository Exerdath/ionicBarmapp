import React, { useReducer, useContext } from "react";
import InitialState from "../reducers/InitialState";
import {
  getDrinksByIngredient,
  getFavedDrinks,
  getDrinkById,
  authenticate,
  addDrinkToFaves,
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

interface IUser {
  userId?: number;
  email?: string;
  password?: string;
}

type Action =
  | { type: "getAllDrinksByIngredient"; payload: any }
  | { type: "getAllFavDrinks"; payload: any }
  | { type: "getDrinkById"; payload: any }
  | { type: "login"; payload: any }
  | { type: "faveDrink"; payload: any }
  | { type: "logout" };
type Dispatch = (action: Action) => void;
type State = {
  drinks: Array<any>;
  usersDrinks: Array<any>;
  user: IUser;
  selectedDrink: IDrink;
  selectedIngredient: string;
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
    case types.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case types.FAVOURITE_DRINK:
      return {
        ...state,
        usersDrinks: [action.payload, ...state.usersDrinks],
      };
    case types.LOGOUT:
      return {
        drinks: [],
        usersDrinks: [],
        user: { userId: 6, email: "", password: "" },
        selectedDrink: {
          idDrink: 11410,
          strDrink: "Gin Fizz",
          strAlcoholic: "Alcoholic",
          strInstructions:
            "Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg",
          ingredients: ["Gin", "Lemon", "Powdered sugar", "Carbonated water"],
          measures: ["2 oz ", "Juice of 1/2 ", "1 tsp "],
          path: "/11410",
        },
        selectedIngredient: "Gin",
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

async function loginUser(dispatch: any, email: string, password: string) {
  try {
    const response = await authenticate(email, password).then((res) => res);

    dispatch({ type: types.LOGIN, payload: response });
  } catch (error) {
    console.log(error);
  }
}

async function logoutUser(dispatch: any) {
  try {
    dispatch({ type: types.LOGOUT });
  } catch (error) {
    console.log(error);
  }
}

async function faveDrink(dispatch: any, userId: number, drinkId: number) {
  try {
    const response = await addDrinkToFaves(userId, drinkId).then((res) => res);

    dispatch({ type: types.FAVOURITE_DRINK, payload: response });
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
  loginUser,
  faveDrink,
};
