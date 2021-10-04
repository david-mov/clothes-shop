import axios from "axios";
import { HOST, PORT } from "../../consts/portConsts";

export const putProduct = async (payload) => {
  try {
    await axios.put(`http://${HOST}:${PORT}/products`, payload);
  } catch (err) {
    console.error(err);
  }
};

//export default getAllProducts;
