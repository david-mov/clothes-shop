import { GET_FILTER_BY_PRICE } from '../../consts/actionConsts'

export function getPrice(price) {
    return async (dispatch) => {
		try {
	        dispatch({type: GET_FILTER_BY_PRICE, payload: price})
		} catch (err) {
			console.error(err);
		}
    }
};