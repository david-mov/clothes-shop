import axios from "axios";

export const getEmailConfirm = (payload) => async () => {
    try {
      await axios.get('/email/confirmEmail', payload);
    } catch (err) {
      console.error(err);
    }
  };
