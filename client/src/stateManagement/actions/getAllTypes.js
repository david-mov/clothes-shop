import axios from "axios";
import { GET_ALL_TYPES } from "../../consts/actionConsts";
import { HOST, PORT } from "../../consts/portConsts";

export const getAllTypes = () => async (dispatch) => {
  try {
    const allCategories = await axios.get(`http://${HOST}:${PORT}/type`);

    return dispatch({ type: GET_ALL_TYPES, payload: allCategories.data });
  } catch (err) {
    console.error(err);
  }
};

//export default getAllCategories;
