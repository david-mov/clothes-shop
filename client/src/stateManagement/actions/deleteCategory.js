import axios from "axios";
import GET_ALL_CATEGORIES from '../../consts/actionConsts';

export const deleteCategory = (id) => async (dispatch) => {
    try {
      const dataBd =  await axios.delete(`/category/${id}`);
     return  dispatch({ type: GET_ALL_CATEGORIES, payload: dataBd.data})
  
    } catch (e) {
      console.error(e)
    }
  }