import sendRequest from "./send-request";

const BASE_URL = "/api/journal";

export function uploadToS3API(imgFormData) {
  return sendRequest(`${BASE_URL}/new/upload`, "POST", imgFormData, true);
}

export function addPostAPI(postData) {
  return sendRequest(`${BASE_URL}/new`, "POST", postData);
}

export function getAllPostAPI() {
  return sendRequest(BASE_URL);
}

export function deletePostAPI(postID) {
  return sendRequest(`${BASE_URL}/${postID}`, "DELETE");
}

export function updatePostAPI(postID, postData) {
  return sendRequest(`${BASE_URL}/${postID}/edit`, "PUT", postData);
}

export function getAdminsPostAPI() {
    return sendRequest(`${BASE_URL}/admins`);
  }