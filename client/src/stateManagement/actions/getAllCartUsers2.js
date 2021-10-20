import axios from "axios";
import { GET_ALL_CART_USER } from "../../consts/actionConsts";

export const getAllCartUsers2 = (Cart_Users) => async (dispatch) => {
  try {
    const allCart = await axios.get(`/cart_user/${Cart_Users}`);
    return dispatch({ type: GET_ALL_CART_USER, payload: allCart.data });
  } catch (err) {
    console.error(err);
  }
};


