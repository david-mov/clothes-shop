import { GET_LOGOUT } from '../../consts/actionConsts';
import axios from 'axios';
import { HOST, PORT } from "../../consts/portConsts";

export const getLogout = () => async (dispatch) => {
	try {
		const res = await axios.get(`http://${HOST}:${PORT}/user/logout`, {withCredentials: true})
		dispatch({ type: GET_LOGOUT, payload: res.data })
	}
	catch (err) {
		console.error(err);
	}
}