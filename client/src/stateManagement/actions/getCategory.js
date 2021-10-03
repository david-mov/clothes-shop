import { GET_CATEGORY } from '../../consts/actionConsts'

export function getCategory(category) {
    return async (dispatch) => {
		try {
	        dispatch({type: GET_CATEGORY, payload: category})
		} catch (err) {
			console.error(err);
		}
    }
};

