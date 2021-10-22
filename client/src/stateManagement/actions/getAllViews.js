import axios from "axios";
import { GET_ALL_VIEWS } from "../../consts/actionConsts";

export const getAllViews = () => async (dispatch) => {
  try {
    const allViews = await axios.get('/view');
    return dispatch({ type: GET_ALL_VIEWS, payload: allViews.data });
  } catch (err) {
    console.error(err);
  }
};