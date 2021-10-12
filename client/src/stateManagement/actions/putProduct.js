import axios from "axios";
import { HOST, PORT } from "../../consts/portConsts";


export const putProduct = (id,payload) => {
  return async (dispatch) => {
    try {
      await axios.put(`http://${HOST}:${PORT}/products/${id}`, payload);
     
    } catch (err) {
      console.error(err);
    }
  };
};


//export default getAllProducts;
