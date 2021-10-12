import { RESTA_CONTADOR } from "../../consts/actionConsts"


const restaContador = (numero) => (dispatch) => {
    dispatch({type: RESTA_CONTADOR, payload: numero})
}

export default restaContador