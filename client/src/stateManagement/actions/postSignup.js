import axios from "axios";
import { POST_SIGNUP } from "../../consts/actionConsts";

export const postSignup = (user) => async (dispatch) => {
  try {
    const signup = await axios({
          method: 'POST',
          url: '/user/signup',          
          data: user,      
          withCredentials: true,
          httpOnly: true,
        });
    return dispatch({ type: POST_SIGNUP, payload: signup.data });
  } catch (err) {
    console.error(err);
  }
};
