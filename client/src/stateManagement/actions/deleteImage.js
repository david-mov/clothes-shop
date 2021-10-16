import axios from "axios";
import GET_PRODUCT_DETAILS from '../../consts/actionConsts';

export const deleteImage = (id) => {

  return async (dispatch) => {
    try {
    const dataBd =  await axios.get(`/image/deleted/${id}`);
      dispatch({ type: GET_PRODUCT_DETAILS, payload: dataBd.data})
    } catch (err) {
      console.error(err);
    }
  };
};

