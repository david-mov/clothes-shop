import axios from "axios";
import GET_ALL_PRODUCTS from '../../consts/actionConsts';

export const deleteProduct = (id) => async (dispatch) => {
    try {
      const dataBd =  await axios.delete(`/products/${id}`);
     return  dispatch({ type: GET_ALL_PRODUCTS, payload: dataBd.data})
  
    } catch (e) {
      console.error(e)
    }
  }