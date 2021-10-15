import { REMOVE_ITEM } from "../../consts/actionConsts";
import axios from "axios";


const getRemoveItem = (productId) => async(dispatch) => {
    console.log("EL ID", productId)
try {
    const deleteProductCart = await axios.get(`/cart/delete/${productId}`)
    return dispatch({ type: REMOVE_ITEM, payload: deleteProductCart.data })
}catch (err) {
        console.error(err);
    }
}
export default getRemoveItem;