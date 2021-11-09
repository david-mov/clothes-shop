import axios from "axios";
import { GET_USERS } from "../../consts/actionConsts";

export const getAllUsers = () => async (dispatch) => {
  try {
    const getAllUsers = await axios.get('/user/admin');
    return dispatch({ type: GET_USERS, payload: getAllUsers.data });
  } catch (err) {
    console.error(err);
  }
};


