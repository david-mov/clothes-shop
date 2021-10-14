import axios from "axios";
import { GET_UPDATE_CATEGORY_DETAILS } from "../../consts/actionConsts";

export const getUpdateCategoryDetails = (id) => async (dispatch) => {
	try {
		const updateCategorytDetails = await axios.get(`/category/update/${id}`)
		return dispatch({ type: GET_UPDATE_CATEGORY_DETAILS, payload: updateCategorytDetails.data })
	}
	catch (e) {
		console.error(e)
	}
}