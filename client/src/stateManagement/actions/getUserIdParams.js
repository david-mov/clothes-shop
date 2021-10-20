import axios from "axios";
import { GET_USER_ID_PARAMS } from "../../consts/actionConsts";

export const getUserIdParams = (idFinal) => async (dispatch) => {
	try {
		const userIdParamsDetail = await axios.get(`/user/user/${idFinal}`)
		console.log("desde accion", userIdParamsDetail)
		return dispatch({ type: GET_USER_ID_PARAMS, payload: userIdParamsDetail.data })
	}
	catch (e) {
		console.error(e)
	}
}