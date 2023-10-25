import sendRequest from "./send-request";

const BASE_URL = "/api/users";

export function signUpAPI(userData) {
    return sendRequest(BASE_URL, "POST", userData);
  }