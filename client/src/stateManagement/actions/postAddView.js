import axios from "axios";
import {POST_VIEW_PU} from "../../consts/actionConsts"

export const postAddViewUser = (payload) => async(dispatch) => {
    try {
      const post = await axios.post("/view", payload);
     dispatch({type: POST_VIEW_PU, payload:post.data})
    } catch (err) {
      console.error(err);
    }
};
