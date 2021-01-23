import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:6600/api/users";

export async function authenticate(user: any) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}

export async function signup(user: any) {
  return fetch(baseUrl + "/signup", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}
