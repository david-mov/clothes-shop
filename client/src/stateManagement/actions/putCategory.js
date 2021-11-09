import axios from "axios";

export const putCategory = (id,payload) => {
  return async (dispatch) => {
    try {
      await axios.put(`/category/update/${id}`, payload);
     
    } catch (err) {
      console.error(err);
    }
  };
};
