import axios from "axios";
import { GET_LAST_PRODUCTS } from '../../consts/actionConsts';

export const getLastProducts = () => async(dispatch) => {  
	try {
		const lastProducts = await axios.get(`/products/Home`)
		dispatch({type: GET_LAST_PRODUCTS, payload: lastProducts.data})
	}
	catch (e) {
		console.error(e)
	}
}