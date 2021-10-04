import { 
	GET_ALL_TYPES
} from '../../consts/actionConsts';

const initialState = {
	types: [],
};

export default function productsReducer(state = initialState, action) {
	switch(action.type) {
		case GET_ALL_TYPES:
			return {
				...state,
				types: action.payload,
			}
		default:
			return ({ ...state });
	}
}