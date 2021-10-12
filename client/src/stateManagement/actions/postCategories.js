import axios from "axios";
import { HOST, PORT } from "../../consts/portConsts";
import { POST_CATEGORIES } from "../../consts/actionConsts";

export const PostCategories = (payload) => {
  return async (dispatch) => {
    try {
      await axios.post(`http://${HOST}:${PORT}/category`, payload);
      return dispatch({
        type: POST_CATEGORIES,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

//export default getAllProducts;
