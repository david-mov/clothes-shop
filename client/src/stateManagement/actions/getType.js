import { GET_TYPE } from '../../consts/actionConsts'

export function getType(type) {
	console.log("ENTRE EN LA ACTION DE TYPE")
    return async (dispatch) => {
		try {
	        dispatch({type: GET_TYPE, payload: type})
		} catch (err) {
			console.error(err);
		}
    }
};