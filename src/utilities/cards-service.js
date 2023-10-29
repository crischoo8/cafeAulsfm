import {
    addCardAPI,
    getAllCardAPI,
    deleteCardAPI,
    updateCardAPI,
  } from "./cards-api";

  export async function addCardService(postData) {
    const cardItem = await addCardAPI(postData);
    return cardItem.data.card;
  }
  
  export async function getAllCardService() {
    const allCard = await getAllCardAPI();
    return allCard.data.card;
  }
  
  export async function deleteCardService(cardID) {
    await deleteCardAPI(cardID);
  }
  
  
  export async function updateCardService(cardID, cardData) {
    const result = await updateCardAPI(cardID, cardData);
    return result.data.card;
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