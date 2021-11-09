import axios from "axios";
import { GET_USER_DETAIL } from "../../consts/actionConsts";

export const getUserDetail = (idFinal) => async (dispatch) => {
	try {
		const userDetail = await axios.get(`user/userDetail/${idFinal}`)
		return dispatch({ type: GET_USER_DETAIL, payload: userDetail.data })
	}
	catch (e) {
		console.error(e)
	}
}