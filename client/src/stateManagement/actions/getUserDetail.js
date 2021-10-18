import { GET_USER_DETAIL } from '../../consts/actionConsts';
import axios from 'axios';

export const getUserDetail = () => async (dispatch) => {
	try {
		const user = await axios({
			method: 'GET',
			url: '/user/userDetail',
			withCredentials: true,
			httpOnly: true,
		})
		dispatch({ type: GET_USER_DETAIL, payload: user.data })
	}
	catch (err) {
		console.error(err);
	}
}