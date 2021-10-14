import { REMOVE_ITEM } from "../../consts/actionConsts";
import axios from "axios";


export const getRemoveItem = (productId) => async(dispatch) => {
console.log("DESDE GETREMOVE", productId)
try {
    const deleteProductCart = await axios.delete("/cart", productId)
    console.log("DEL AXIOS",deleteProductCart.data )
    return dispatch({ type: REMOVE_ITEM, payload: deleteProductCart.data })
}catch (err) {
        console.error(err);
    }
}
export default getRemoveItem;