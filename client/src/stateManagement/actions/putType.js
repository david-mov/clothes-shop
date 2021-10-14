import axios from "axios";

export const putType = (id,payload) => {
  return async (dispatch) => {
    try {
      await axios.put(`/type/update/${id}`, payload);
     
    } catch (err) {
      console.error(err);
    }
  };
};
