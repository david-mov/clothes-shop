import axios from "axios";
import { POST_SIGNUP } from "../../consts/actionConsts";
import { HOST, PORT } from "../../consts/portConsts";

export const postSignup = (user) => async (dispatch) => {
  try {
    const signup = await axios({
          method: 'POST',
          url: `http://${HOST}:${PORT}/user/signup`,          
          data: user,      
          withCredentials: true,
          httpOnly: true,
        });
    return dispatch({ type: POST_SIGNUP, payload: signup.data });
  } catch (err) {
    console.error(err);
  }
};
