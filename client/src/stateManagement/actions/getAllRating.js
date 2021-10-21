import axios from "axios";
import { GET_ALL_RATING } from "../../consts/actionConsts";

export const getAllRating = () => async (dispatch) => {
  try {
    const allRating = await axios.get('/rating');
    return dispatch({ type: GET_ALL_RATING, payload: allRating.data });
  } catch (err) {
    console.error(err);
  }
};

