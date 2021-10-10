import { REMOVE_ITEM } from "../../consts/actionConsts";


const getRemoveItem = (productId) => (dispatch) => {
console.log("DESDE GETREMOVE", productId)
    try {
        return dispatch ({
            type: REMOVE_ITEM,
            payload: productId
        }) 
    } catch (err) {
        console.error(err);
    }

};
export default getRemoveItem;