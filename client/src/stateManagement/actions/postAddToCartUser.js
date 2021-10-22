import axios from "axios";
import {POST_CART_USER} from "../../consts/actionConsts"

export const postAddToCartUser = (payload) => async (dispatch) => {

  console.log("payload", payload)
  
    try {
     const traigo =  await axios.post('/cart_user', payload, {withCredentials: true, httpOnly:true})
      return dispatch({ type: POST_CART_USER, payload: traigo.data})
    } catch (err) {
      console.error(err);
    }
  };
