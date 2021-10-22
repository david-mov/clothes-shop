import axios from "axios";
import { GET_ALL_SIZES } from "../../consts/actionConsts";

export const getAllsizes = () => async (dispatch) => {
  try {
    const getAllsizes = await axios.get('/size');

    return dispatch({ type: GET_ALL_SIZES, payload: getAllsizes.data });
  } catch (err) {
    console.error(err);
  }
};

