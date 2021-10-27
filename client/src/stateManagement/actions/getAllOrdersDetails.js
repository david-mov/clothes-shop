import axios from "axios";
import { GET_CART_ORDER_DETAILS } from "../../consts/actionConsts";

export const getOrderDetails = (idOrder) => async (dispatch) => {
	try {
		const OrderDetails = await axios.get(`user/order/${idOrder}`)
		return dispatch({ type: GET_CART_ORDER_DETAILS, payload: OrderDetails.data })
	}
	catch (e) {
		console.error(e)
	}
}