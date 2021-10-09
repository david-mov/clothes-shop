import axios from "axios";
import { HOST, PORT } from "../../consts/portConsts";

export const PostSize = (payload) => {
  return async (dispatch) => {
    try {
      await axios.post(`http://${HOST}:${PORT}/size`, payload);
    } catch (err) {
      console.error(err);
    }
  };
};
