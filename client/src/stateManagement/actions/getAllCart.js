import axios from "axios";
import { GET_ALL_CART } from "../../consts/actionConsts";

export const getAllCart = () => async (dispatch) => {
  try {
    const allCart = await axios.get('/cart');
    return dispatch({ type: GET_ALL_CART, payload: allCart.data });
  } catch (err) {
    console.error(err);
  }
};



