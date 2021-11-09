import axios from "axios";
import GET_UPDATE_PRODUCT_DETAILS from '../../consts/actionConsts';

export const deleteImage = (id) => async (dispatch)=>{
  try {
    const dataBd =  await axios.get(`/image/deleted/${id}`);
    return dispatch({ type: GET_UPDATE_PRODUCT_DETAILS, payload: dataBd.data})
    
  } catch (e) {
    console.error(e);
  }
}



