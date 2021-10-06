import axios from "axios";
import { POST_LOGIN } from "../../consts/actionConsts";
import { HOST, PORT } from "../../consts/portConsts";

export const postLogin = (user) => async (dispatch) => {
  try {
    const login = await axios.post(`http://${HOST}:${PORT}/user/login`, user);
    return dispatch({ type: POST_LOGIN, payload: login.data });
  } catch (err) {
    console.error(err);
  }
};
