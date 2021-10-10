import { ADD_TO_BASKET } from "../../consts/actionConsts";


const getAddToCart = (id) => (dispatch) => {
console.log("SUPUESTO ID", id)
    try {
        return dispatch({
            type: ADD_TO_BASKET,
            payload: id
        }) 
        /*dispatch ({ type: ADD_TO_BASKET, payload: id });*/
    } catch (err) {
        console.error(err);
    }

};
export default getAddToCart;
