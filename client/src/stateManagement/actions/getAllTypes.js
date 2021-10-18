import axios from "axios";
import { GET_ALL_TYPES } from "../../consts/actionConsts";

export const getAllTypes = () => async (dispatch) => {
  try {
    const allTypes = await axios.get('/type');
    return dispatch({ type: GET_ALL_TYPES, payload: allTypes.data });
  } catch (err) {
    console.error(err);
  }
};


