import axios from "axios";
import { GET_ALL_SIZES } from "../../consts/actionConsts";
import { HOST, PORT } from "../../consts/portConsts";

export const getAllsizes = () => async (dispatch) => {
  try {
    const getAllsizes = await axios.get(`http://${HOST}:${PORT}/size`);

    return dispatch({ type: GET_ALL_SIZES, payload: getAllsizes.data });
  } catch (err) {
    console.error(err);
  }
};

//export default getAllCategories;
