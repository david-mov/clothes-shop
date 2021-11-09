import axios from "axios";
import { POST_LOGIN } from "../../consts/actionConsts";

export const postLogin = (user) => async (dispatch) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/auth/login',
      data: user,
      withCredentials: true,
      httpOnly: true,
    });
    return dispatch({ type: POST_LOGIN, payload: res });
  } catch (err) {
    console.error(err);
  }
};
