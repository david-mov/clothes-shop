import axios from "axios";
import { HOST, PORT } from "../../consts/portConsts";


export const putCategory = (id,payload) => {
  return async (dispatch) => {
    try {
      await axios.put(`http://${HOST}:${PORT}/category/${id}`, payload);
     
    } catch (err) {
      console.error(err);
    }
  };
};
