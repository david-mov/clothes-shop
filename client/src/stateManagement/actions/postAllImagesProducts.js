import axios from "axios";

export const postAllImagesProducts = (id,payload) => {
    console.log("entra al dispahc y muestra " ,id,payload );
  return async () => {
    try {
      await axios.post(`/image?image_product=${id}`, payload);
    } catch (err) {
      console.error(err);
    }
  };
};