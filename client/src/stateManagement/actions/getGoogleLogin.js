import axios from "axios";
import { GET_GOOGLE_LOGIN } from "../../consts/actionConsts";

export const getGoogleLogin = () => async (dispatch) => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/auth/google',
      withCredentials: true,
      httpOnly: true,
    });
    return dispatch({ type: GET_GOOGLE_LOGIN, payload: res });
  } catch (err) {
    console.error(err);
  }
};