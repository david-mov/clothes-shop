import axios from "axios";
import { GET_ALL_SIZE } from "../../consts/actionConsts";
import { HOST, PORT } from "../../consts/portConsts";

export const getAllsizes = () => async (dispatch) => {
  try {
    const allCategories = await axios.get(`http://${HOST}:${PORT}/size`);

    return dispatch({ type: GET_ALL_SIZE, payload: allCategories.data });
  } catch (err) {
    console.error(err);
  }
};

//export default getAllCategories;
