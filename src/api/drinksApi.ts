import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3000/drinks/";
const drinksByIngUrl = "http://localhost:3000/drinksByIng/";
const drinkByIdUrl = "http://localhost:3000/drinkbyId/";
const loginUrl = "http://localhost:3000/login/";

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

export async function authenticate(email: string, password: string) {
  return fetch(loginUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export async function addDrinkToFaves(userId: number, drinkId: number) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ userId, drinkId }),
  })
    .then(handleResponse)
    .catch(handleError);
}
