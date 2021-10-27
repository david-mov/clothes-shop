import axios from "axios";

export const getEmailReset = (payload) => async () => {
    try {
      await axios.get('/email/resetEmail', payload);
    } catch (err) {
      console.error(err);
    }
  };
