import axios from "axios";

export const PostSize = (payload) => {
  return async (dispatch) => {
    try {
      await axios.post('/size', payload);
    } catch (err) {
      console.error(err);
    }
  };
};
