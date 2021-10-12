import axios from "axios";

export const PostTypes = (payload) => {
  return async (dispatch) => {
    try {
      await axios.post('/type', payload);
    } catch (err) {
      console.error(err);
    }
  };
};
