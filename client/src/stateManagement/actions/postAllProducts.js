import axios from "axios";
import { HOST, PORT } from "../../consts/portConsts";

export const postAllProducts = (payload) => {
  return async () => {
    try {
      await axios.post(`http://${HOST}:${PORT}/products`, payload);
    } catch (err) {
      console.error(err);
    }
  };
};
