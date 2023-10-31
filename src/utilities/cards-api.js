import sendRequest from "./send-request";

const BASE_URL = "/api/bucketlist";

export function addCardAPI(cardData) {
  return sendRequest(`${BASE_URL}/new`, "POST", cardData);
}

export function getAllCardAPI() {
  return sendRequest(BASE_URL);
}

export function deleteCardAPI(bucketlistItemID) {
  return sendRequest(`${BASE_URL}/${bucketlistItemID}`, "DELETE");
}

export function updateCardAPI(bucketlistItemID, cardData) {
  return sendRequest(`${BASE_URL}/${bucketlistItemID}/edit`, "PUT", cardData);
}
