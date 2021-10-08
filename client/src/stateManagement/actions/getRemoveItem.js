import { REMOVE_ITEM } from "../../consts/actionConsts";


const getRemoveItem = (id) => {

    try {
        return {
            type: REMOVE_ITEM,
            payload: id
        }

        /*dispatch ({ type: ADD_TO_BASKET, payload: id });*/
    } catch (err) {
        console.error(err);
    }

};
export default getRemoveItem;