import { GET_CONTADOR } from "../../consts/actionConsts";


const getContador = ( props) => (dispatch) => {
    console.log("PROPS DE LA ACTION", props)
    try {
        return dispatch({
            type: GET_CONTADOR,
            payload: props
        }) 
    } catch (err) {
        console.error(err);
    }

};
export default getContador;
