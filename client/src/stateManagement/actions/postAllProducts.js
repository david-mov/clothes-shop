import axios from "axios";
import { HOST, PORT } from "../../consts/portConsts";

export const postAllProducts = async (payload) => {
  try {
    await axios.post(`http://${HOST}:${PORT}/products`, payload);
  } catch (err) {
    console.error(err);
  }
};

//export default getAllProducts;
