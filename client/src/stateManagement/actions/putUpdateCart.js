import axios from "axios";
import {PUT_CART} from "../../consts/actionConsts"

export const putUpdateCart = (payload) => async(dispatch) => {
    try {
      const put = await axios.put("/cart", payload);
     dispatch({type: PUT_CART, payload:put.data})
    } catch (err) {
      console.error(err);
    }
};
