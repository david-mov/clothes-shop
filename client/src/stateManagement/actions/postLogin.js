import axios from "axios";
import { POST_LOGIN } from "../../consts/actionConsts";
import { HOST, PORT } from "../../consts/portConsts";

export const postLogin = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`http://${HOST}:${PORT}/user/login`, user, {withCredentials: true});
    return dispatch({ type: POST_LOGIN, payload: res });
  } catch (err) {
    console.error(err);
  }
};
