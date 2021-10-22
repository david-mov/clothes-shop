import axios from "axios";
import GET_ALL_TYPES from '../../consts/actionConsts';

export const deleteTypes = (id) => async (dispatch) => {
    try {
      const dataBd =  await axios.delete(`/type/${id}`);
     return  dispatch({ type: GET_ALL_TYPES, payload: dataBd.data})
  
    } catch (e) {
      console.error(e)
    }
  }