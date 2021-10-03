import axios from 'axios';
import { GET_ALL_CATEGORIES } from '../../consts/actionConsts'
import { HOST, PORT } from '../../consts/portConsts'

const getAllCategories = () => async (dispatch) => {
		try {
			const allCategories = await axios.get(`http://${HOST}:${PORT}/category`)
			return dispatch({type: GET_ALL_CATEGORIES, payload: allCategories.data})
		} catch (err) {
			console.error(err);
		}
};

export default getAllCategories;