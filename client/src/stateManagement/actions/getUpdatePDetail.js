import axios from "axios";
import { GET_UPDATE_PRODUCT_DETAILS } from "../../consts/actionConsts";
import { HOST, PORT } from "../../consts/portConsts";

export const getUpdateProductDetails = (id) => async (dispatch) => {
	try {
		const updateProductDetails = await axios.get(`http://${HOST}:${PORT}/products/update/${id}`)
		return dispatch({ type: GET_UPDATE_PRODUCT_DETAILS, payload: updateProductDetails.data })
	}
	catch (e) {
		console.error(e)
	}
}