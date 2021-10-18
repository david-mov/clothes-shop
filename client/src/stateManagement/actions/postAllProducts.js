import axios from "axios";

export const postAllProducts = (payload) => {
  return async () => {
    try {
      await axios.post('/products', payload);
    } catch (err) {
      console.error(err);
    }
  };
};
