import axios from 'axios';
import { GET_ALL_CATEGORIES } from '../../consts/actionConsts'
import { HOST, PORT } from '../../consts/portConsts'

export function getAllCategories() { 
	console.log(PORT)
	return async (dispatch) => {
		try {
			const allCategories = await axios.get(`http://${HOST}:${PORT}/category`)

			dispatch({type: GET_ALL_CATEGORIES, payload: allCategories.data})

		} catch (err) {
			console.error(err);
		}
	}
};

