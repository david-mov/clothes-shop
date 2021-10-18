import axios from "axios";
import { GET_UPDATE_TYPE_DETAILS } from "../../consts/actionConsts";

export const getUpdateTypesDetails = (id) => async (dispatch) => {
	try {
		const updateTypeDetails = await axios.get(`/type/update/${id}`)
		return dispatch({ type: GET_UPDATE_TYPE_DETAILS, payload: updateTypeDetails.data })
	}
	catch (e) {
		console.error(e)
	}
}