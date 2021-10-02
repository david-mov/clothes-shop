import axios from 'axios';
import { GET_ALL_PRODUCTS } from '../../consts/actionConsts'
import { HOST, PORT } from '../../consts/portConsts'

export function getAllProducts() {
 return async (dispatch) => {
		try {
			const allProducts = await axios.get(`http://${HOST}:${PORT}/products`);
			 dispatch({type: GET_ALL_PRODUCTS, payload: allProducts.data})
		} catch(err) {
			console.error(err);
		}
	}
};

