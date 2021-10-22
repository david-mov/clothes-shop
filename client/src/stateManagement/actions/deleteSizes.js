import axios from "axios";
import GET_ALL_SIZES from '../../consts/actionConsts';

export const deleteSizes = (id) => async (dispatch) => {
    try {
      const dataBd =  await axios.delete(`/size/${id}`);
     return  dispatch({ type: GET_ALL_SIZES, payload: dataBd.data})
  
    } catch (e) {
      console.error(e)
    }
  }