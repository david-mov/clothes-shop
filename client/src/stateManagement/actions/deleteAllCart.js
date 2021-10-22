import axios from "axios";
import DELETE_ALL_CART from '../../consts/actionConsts';

export const deleteAllCart = (id) => async (dispatch)=>{
    console.log("ACA ENTRE EN LA ACCION")
  try {
    const traigo = await axios.get(`/cart_user/deleteAllCart/${id}`);
    console.log("ACA TA EL AXIOS",traigo.data)
    return dispatch({type: DELETE_ALL_CART})
  } catch (e) {
    console.error(e);
  }
}
