import axios from "axios";

export const deleteAllCart = (payload) => async() => {
    try {
     await axios.get('/cart_user/deleteAllCart/delete', payload)
    } catch (err) {
      console.error(err);
    }
  };

