import axios from "axios";
import { GET_USER_ID_PARAMS } from "../../consts/actionConsts";

export const getUserIdParams = (id) => async (dispatch) => {
	try {
		const userIdParamsDetail = await axios.get(`/user/user/${id}`)
		return dispatch({ type: GET_USER_ID_PARAMS, payload: userIdParamsDetail.data })
	}
	catch (e) {
		console.error(e)
	}
}