import axios from 'axios';
import { GET_ALL_TYPES } from '../../consts/actionConsts'
import { HOST, PORT } from '../../consts/portConsts'

export function getAllTypes() { 
	return async (dispatch) => {
		try {
			const allTypes = await axios.get(`http://${HOST}:${PORT}/type`)
			dispatch({type: GET_ALL_TYPES, payload: allTypes.data})
		} catch (err) {
			console.error(err);
		}
	}
};

