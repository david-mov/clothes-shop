import axios from "axios";
import { GET_ALL_PRODUCTS } from "../../consts/actionConsts";
//import { HOST, PORT } from "../../consts/portConsts";

export const getAllProducts = () => async (dispatch) => {
  try {
    const allProducts = await axios.get("http://localhost:3001/products"); //'http://products'
    return dispatch({ type: GET_ALL_PRODUCTS, payload: allProducts.data });
  } catch (err) {
    console.error(err);
  }
};
