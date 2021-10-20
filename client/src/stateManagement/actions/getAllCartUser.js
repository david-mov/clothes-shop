import axios from "axios";
import { GET_ALL_CART_TOTAL_USER } from "../../consts/actionConsts";

export const getAllCartUsers = (Cart_Users) => async (dispatch) => {
  try {
    const allCart = await axios.get(`/cart_user`);
    return dispatch({ type: GET_ALL_CART_TOTAL_USER, payload: allCart.data });
  } catch (err) {
    console.error(err);
  }
};
//Cart_Users


