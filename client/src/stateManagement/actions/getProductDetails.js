import axios from "axios";
import { GET_PRODUCT_DETAILS } from "../../consts/actionConsts";
import { HOST, PORT } from "../../consts/portConsts";

export const getProductDetails = (id) => async (dispatch) => {
	try {
		const productDetails = await axios.get(`http://${HOST}:${PORT}/products/${id}`)
		return dispatch({ type: GET_PRODUCT_DETAILS, payload: productDetails.data })
	}
	catch (e) {
		console.error(e)
	}
}