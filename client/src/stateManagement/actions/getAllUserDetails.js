import axios from "axios";
import { GET_ALL_USER_DETAILS} from "../../consts/actionConsts";

export const getAllUserDetails = () => async (dispatch) => {
  try {
    const allUserDetail = await axios.get('/user/allUserDetail');
    return dispatch({ type: GET_ALL_USER_DETAILS, payload: allUserDetail.data });
  } catch (err) {
    console.error(err);
  }
};

