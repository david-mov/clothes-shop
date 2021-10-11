import { GET_TYPE } from '../../consts/actionConsts'

export function getType(type) {
    return async (dispatch) => {
		try {
	        dispatch({type: GET_TYPE, payload: type})
		} catch (err) {
			console.error(err);
		}
    }
};