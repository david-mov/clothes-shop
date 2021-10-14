import axios from "axios";
import { GET_UPDATE_SIZE_DETAILS } from "../../consts/actionConsts";

export const getUpdateSizeDetails = (id) => async (dispatch) => {
	try {
		const updateCategorytDetails = await axios.get(`/size/update/${id}`)
		return dispatch({ type: GET_UPDATE_SIZE_DETAILS, payload: updateCategorytDetails.data })
	}
	catch (e) {
		console.error(e)
	}
}