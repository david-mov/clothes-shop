import axios from "axios";
import { HOST, PORT } from "../../consts/portConsts";

export const PostTypes = (payload) => {
  return async (dispatch) => {
    try {
      await axios.post(`http://${HOST}:${PORT}/type`, payload);
    } catch (err) {
      console.error(err);
    }
  };
};
