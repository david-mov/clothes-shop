import axios from "axios";
import {POST_CART_ORDER} from "../../consts/actionConsts"

export const postAddToOrders = (payload) => async (dispatch) => {
  
    try {
     const traigo =  await axios.post('/user/order', payload)
      return dispatch({ type: POST_CART_ORDER, payload: traigo.data})
    } catch (err) {
      console.error(err);
    }
  };
