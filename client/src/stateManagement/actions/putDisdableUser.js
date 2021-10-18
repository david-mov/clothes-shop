import axios from "axios";
import {GET_USERS} from "../../consts/actionConsts"

export const postDisdableUser = (id,payload) => async (dispatch) => {
    
    const envio = {
        enabled: payload
    }
    try {
     const traigo =  await axios.put(`/user/${id}`,envio)
      return dispatch({ type: GET_USERS, payload: traigo.data})
    } catch (e) {
      console.error(e);
    }
  };
