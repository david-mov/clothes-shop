import axios from "axios";
import {GET_USERS} from "../../consts/actionConsts"

export const putChangeRolUsers = (id,payload) => async (dispatch) => {
    
    const envio = {
        user_rol: payload
    }
    try {
     const traigo =  await axios.put(`/user/rol/${id}`,envio)
      return dispatch({ type: GET_USERS, payload: traigo.data})
    } catch (e) {
      console.error(e);
    }
  };
