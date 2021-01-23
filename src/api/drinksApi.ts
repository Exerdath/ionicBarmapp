import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3000/drinks/";
const drinksByIngUrl = "http://localhost:3000/drinksByIng/";
const drinkByIdUrl = "http://localhost:3000/drinkbyId/";

export async function getDrinkById(id: number) {
  return fetch(drinkByIdUrl + id)
    .then(handleResponse)
    .catch(handleError);
}

export async function getFavedDrinks(userId: number) {
  return fetch(baseUrl + userId)
    .then(handleResponse)
    .catch(handleError);
}

export async function getDrinksByIngredient(ingredient: string) {
  return fetch(drinksByIngUrl + ingredient)
    .then(handleResponse)
    .catch(handleError);
}
