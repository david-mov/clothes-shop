import { GET_USER } from '../../consts/actionConsts';
import axios from 'axios';
import { HOST, PORT } from "../../consts/portConsts";

export const getUser = () => async (dispatch) => {
	try {
		const user = await axios.get(`http://${HOST}:${PORT}/user/info`, {withCredentials: true})
		dispatch({ type: GET_USER, payload: user.data })
	}
	catch (err) {
		console.error(err);
	}
}