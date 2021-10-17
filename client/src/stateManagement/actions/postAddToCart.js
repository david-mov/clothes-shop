import axios from "axios";
import {POST_CART} from "../../consts/actionConsts"

export const postAddToCart = (payload) => async (dispatch) => {
    try {
     const traigo =  await axios.post('/cart', payload, {withCredentials: true, httpOnly:true})
      return dispatch({ type: POST_CART, payload: traigo.data})
    } catch (err) {
      console.error(err);
    }
  };
