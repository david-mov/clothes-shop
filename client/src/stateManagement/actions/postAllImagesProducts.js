import axios from "axios";
import { HOST, PORT } from "../../consts/portConsts";

export const postAllImagesProducts = (id,payload) => {
    console.log("entra al dispahc y muestra " ,id,payload );
  return async () => {
    try {
      await axios.post(`http://${HOST}:${PORT}/image?image_product=${id}`, payload);
    //   return dispatch({
    //     type: POS_PRODUCT,
    //   });
    } catch (err) {
      console.error(err);
    }
  };
};

//export default getAllProducts;