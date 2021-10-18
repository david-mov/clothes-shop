import axios from "axios";
import { POST_USER_DETAILS } from "../../consts/actionConsts";

export const postUserDetails = (user_detail,payload) => {

  return async (dispatch) => {
    try {
      await axios.post(`/user/userDetail/${user_detail}`, payload);
      return dispatch({
        type: POST_USER_DETAILS,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

//export default getAllProducts;
