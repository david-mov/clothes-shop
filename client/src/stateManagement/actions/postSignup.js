import axios from "axios";
import { POST_SIGNUP } from "../../consts/actionConsts";

export const postSignup = (user) => async (dispatch) => {
  try {
    const signup = await axios({
          method: 'POST',
          url: '/auth/signup',          
          data: user,      
          withCredentials: true,
          httpOnly: true,
        });
    return dispatch({ type: POST_SIGNUP, payload: signup });
  } catch (err) {
    console.error(err);
  }
};
