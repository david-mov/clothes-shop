import { GET_USER } from '../../consts/actionConsts';
import axios from 'axios';

export const getUser = () => async (dispatch) => {
	try {
		const user = await axios({
			method: 'GET',
			url: '/user/info',
			withCredentials: true,
			httpOnly: true,
		})
		dispatch({ type: GET_USER, payload: user.data })
	}
	catch (err) {
		console.error(err);
	}
}