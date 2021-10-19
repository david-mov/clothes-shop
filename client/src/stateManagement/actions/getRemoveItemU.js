import { REMOVE_ITEM_USER } from "../../consts/actionConsts";
import axios from "axios";


const getRemoveItemUser = (payload) => async(dispatch) => {
try {
    const deleteProductCart = await axios.post("/cart_user/delete_cart",payload)
    return dispatch({ type: REMOVE_ITEM_USER, payload: deleteProductCart.data })
}catch (err) {
        console.error(err);
    }
}
export default getRemoveItemUser;