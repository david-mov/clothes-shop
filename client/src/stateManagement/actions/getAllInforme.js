import axios from "axios";
import { GET_ALL_PRODUCTS_INFORME } from "../../consts/actionConsts";

export const getAllInformeDetails = (id) => async (dispatch) => {
  try {
    const allCart = await axios.get(`/products/detaiis/informe/${id}`);
    return dispatch({ type: GET_ALL_PRODUCTS_INFORME, payload: allCart.data });
  } catch (err) {
    console.error(err);
  }
};


