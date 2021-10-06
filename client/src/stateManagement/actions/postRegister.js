import axios from "axios";
import { POST_REGISTER } from "../../consts/actionConsts";
import { HOST, PORT } from "../../consts/portConsts";

export const postRegister = (user) => async (dispatch) => {
  try {
    const register = await axios.post(`http://${HOST}:${PORT}/user/register`, user);
    return dispatch({ type: POST_REGISTER, payload: register.data });
  } catch (err) {
    console.error(err);
  }
};
