import axios from "axios";
import { GET_ALL_CATEGORIES } from "../../consts/actionConsts";

export const getAllCategories = () => async (dispatch) => {
  try {
    const allCategories = await axios.get('/category');

    return dispatch({ type: GET_ALL_CATEGORIES, payload: allCategories.data });
  } catch (err) {
    console.error(err);
  }
};




