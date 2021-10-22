import axios from "axios";

export const getEmailSender = (payload) => async () => {
    try {
      await axios.get('/email/emailSender', payload);
    } catch (err) {
      console.error(err);
    }
  };
