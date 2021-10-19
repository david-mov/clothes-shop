import axios from "axios";

export const putUserDetail = (id,payload) => {
  return async (dispatch) => {
    try {
      await axios.put(`/user/userDetail/${id}`, payload);
     
    } catch (err) {
      console.error(err);
    }
  };
};
