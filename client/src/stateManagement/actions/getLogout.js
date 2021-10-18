import { GET_LOGOUT } from '../../consts/actionConsts';
import axios from 'axios';

export const getLogout = () => async (dispatch) => {
	try {
		const res = await axios({
			method: 'GET',
			url: '/user/logout',
			withCredentials: true,
			httpOnly: true,
		})
		dispatch({ type: GET_LOGOUT, payload: res })
	}
	catch (err) {
		console.error(err);
	}
}