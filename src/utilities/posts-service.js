import {
    uploadToS3API,
    addPostAPI,
    getAllPostAPI,
    deletePostAPI,
    updatePostAPI,
  } from "./posts-api";
  
  export async function uploadToS3Service(imgFormData) {
    const data = await uploadToS3API(imgFormData);
    // data returns object with imageURLs as an array
    // data.imageURLs[0] for now only one image
    const imgURL = data.imageURLs[0];
    return imgURL;
  }
  
  export async function addPostService(postData) {
    const postItem = await addPostAPI(postData);
    return postItem.data.post;
  }
  
  export async function getAllPostService() {
    const allPost = await getAllPostAPI();
    return allPost.data.post;
  }
  
  export async function deletePostService(postID) {
    await deletePostAPI(postID);
  }
  
  
  export async function updatePostService(postID, postData) {
    const result = await updatePostAPI(postID, postData);
    return result.data.post;
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

//   following code useful for icebox stuff - filtering posts base on their tag
  
//   export function filterByCategory(apparel, mainCategory, selectSubCategory) {
//     const result = apparel
//       .filter((item) => item.mainCategory === mainCategory)
//       .filter(
//         (item) => !selectSubCategory || item.subCategory === selectSubCategory
//       );
  
//     return result;
//   }
  
//   export function sortByWornFreq(apparel, freqOrder) {
//     return apparel.sort((a, b) => {
//       if (freqOrder === "High-to-Low") {
//         return b.wornFrequency - a.wornFrequency;
//       }
//       return a.wornFrequency - b.wornFrequency;
//     });
//   }
  
//   export function filterByCategoryAndFreq(apparel, freqOrder) {
//     return apparel.filter((item) => {
//       if (freqOrder === "Not Worn Yet") {
//         return item.wornFrequency === 0;
//       } else if (freqOrder === "Worn Occasionally (1-5)") {
//         return item.wornFrequency >= 1 && item.wornFrequency <= 5;
//       } else if (freqOrder === "Worn Frequently (>5)") {
//         return item.wornFrequency > 5;
//       } else {
//         return true;
//       }
//     });
//   }
  