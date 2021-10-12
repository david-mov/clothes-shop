import axios from "axios";
import { GET_ALL_PRODUCTS } from "../../consts/actionConsts";

export const getAllProducts = () => async (dispatch) => {
  try {
    const allProducts = await axios.get('/products');
    return dispatch({ type: GET_ALL_PRODUCTS, payload: allProducts.data });
  } catch (err) {
    console.error(err);
  }
};

