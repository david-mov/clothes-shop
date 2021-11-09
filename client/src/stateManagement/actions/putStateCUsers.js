import axios from "axios";
import {PUT_CART_USER} from "../../consts/actionConsts"

export const putStateCartUsers = (payload) => async(dispatch) => {
    try {
      const put = await axios.put("/cart_user/state", payload);
     dispatch({type: PUT_CART_USER, payload:put.data})
    } catch (err) {
      console.error(err);
    }
};
