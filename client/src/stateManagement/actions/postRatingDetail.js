import axios from "axios";
import { GET_RATING_DETAIL } from "../../consts/actionConsts";

export const postRatingDetail = (payload) => async (dispatch) => {
  console.log("PAYLOAD", payload)
  try {
    const ratingDetail = await axios.post('/rating', payload);
    return dispatch({ type: GET_RATING_DETAIL, payload: ratingDetail.data });
  } catch (err) {
    console.error(err);
  }
};