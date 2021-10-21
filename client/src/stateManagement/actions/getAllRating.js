import axios from "axios";
import { GET_ALL_RATINGS } from "../../consts/actionConsts";

export const getAllRating = () => async (dispatch) => {
  try {
    const allRatings = await axios.get('/rating/');
    return dispatch({ type: GET_ALL_RATINGS, payload: allRatings.data });
  } catch (err) {
    console.error(err);
  }
};
