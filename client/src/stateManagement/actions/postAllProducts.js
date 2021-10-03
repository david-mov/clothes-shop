import axios from "axios";
import { HOST, PORT } from "../../consts/portConsts";
import { POS_PRODUCT } from "../../consts/actionConsts";

export const postAllProducts = (payload) => {
  return async (dispatch) => {
    try {
      await axios.post(`http://${HOST}:${PORT}/products`, payload);
      return dispatch({
        type: POS_PRODUCT,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

//export default getAllProducts;
