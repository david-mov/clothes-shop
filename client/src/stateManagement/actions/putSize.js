import axios from "axios";

export const putSize = (id,payload) => {
  return async (dispatch) => {
    try {
      await axios.put(`/size/update/${id}`, payload);
     
    } catch (err) {
      console.error(err);
    }
  };
};
