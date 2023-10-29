import sendRequest from "./send-request";

const BASE_URL = "/api/bucketlist";

export function addCardAPI(cardData) {
  return sendRequest(`${BASE_URL}/new`, "POST", cardData);
}

export function getAllCardAPI() {
  return sendRequest(BASE_URL);
}

export function deleteCardAPI(cardID) {
  return sendRequest(`${BASE_URL}/${cardID}`, "DELETE");
}

export function updateCardAPI(cardID, cardData) {
  return sendRequest(`${BASE_URL}/${cardID}/edit`, "PUT", cardData);
}
