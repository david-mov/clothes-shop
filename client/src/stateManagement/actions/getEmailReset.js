import axios from "axios";

export const getEmailReset = (payload) => async () => {

    try {
      await axios.post('/email/resetEmail', payload);
    } catch (err) {
      console.error(err);
    }
  };
