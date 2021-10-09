import axios from "axios";
import { POST_SIGNUP } from "../../consts/actionConsts";
import { HOST, PORT } from "../../consts/portConsts";

export const postSignup = (user) => async (dispatch) => {
  try {
    const signup = await axios.post(`http://${HOST}:${PORT}/user/signup`, user, {withCredentials: true});
    return dispatch({ type: POST_SIGNUP, payload: signup.data });
  } catch (err) {
    console.error(err);
  }
};
