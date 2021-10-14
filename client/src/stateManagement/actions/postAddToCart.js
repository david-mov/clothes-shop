import axios from "axios";

export const postAddToCart = (payload) => {
    console.log("DESDE LA ACTION",payload )
  return async () => {
    try {
      await axios.post('/cart', payload)
    } catch (err) {
      console.error(err);
    }
  };
};