import axios from "axios";
import { GET_CART_ORDER } from "../../consts/actionConsts";

export const getAllOrders = () => async (dispatch) => {
  try {
    const allCart = await axios.get(`/user/order`);
    return dispatch({ type: GET_CART_ORDER, payload: allCart.data });
  } catch (err) {
    console.error(err);
  }
};
//Cart_Users


