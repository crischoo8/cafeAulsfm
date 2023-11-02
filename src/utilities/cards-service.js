import {
    addCardAPI,
    getAllCardAPI,
    deleteCardAPI,
    updateCardAPI,
    createCardFromPostAPI,
  } from "./cards-api";

  export async function addCardService(cardData) {
    const cardItem = await addCardAPI(cardData);
    return cardItem.data.card;
  }
  
  export async function getAllCardService() {
    const allCard = await getAllCardAPI();
    return allCard.data.card;
  }
  
  export async function deleteCardService(bucketlistItemID) {
    await deleteCardAPI(bucketlistItemID);
  }
  
  
  export async function updateCardService(bucketlistItemID, cardData) {
    const result = await updateCardAPI(bucketlistItemID, cardData);
    return result.data.card;
  }
  
  export async function createCardFromPostService(cardData) {
    const cardItem = await createCardFromPostAPI(cardData);
    return cardItem.data.card;
  }
  
  export function swalBasicSettings(title, icon) {
    const settings = {
      title: title,
      icon: icon,
      background: "#6B6B6B",
      color: "white",
      confirmButtonColor: "#7BA6DE",
      cancelButtonColor: "#000000",
    };
    return settings;
  }