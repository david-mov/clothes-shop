import axios from "axios";

export const putProduct = (id,payload) => {
  return async (dispatch) => {
    try {
      await axios.put(`/products/${id}`, payload);
     
    } catch (err) {
      console.error(err);
    }
  };
};


//export default getAllProducts;
