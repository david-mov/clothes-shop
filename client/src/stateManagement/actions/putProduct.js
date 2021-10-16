import axios from "axios";
import GET_ALL_PRODUCTS from '../../consts/actionConsts';

export const putProduct = (id,payload) => {
  return async (dispatch) => {
    try {
    const dataBd =  await axios.put(`/products/${id}`, payload);
      dispatch({ type: GET_ALL_PRODUCTS, payload: dataBd.data})
    } catch (err) {
      console.error(err);
    }
  };
};



