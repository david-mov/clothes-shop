import { SUMA_CONTADOR } from "../../consts/actionConsts"


const sumaContador = (price ) => (dispatch) => {
    console.log("ACTION", price)
    dispatch({type: SUMA_CONTADOR, payload: price})
}

export default sumaContador