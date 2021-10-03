import { 
	GET_ALL_TYPES
} from '../../consts/actionConsts';

const initialState = {
	types: [],
	typesCopy: []
};

export default function productsReducer(state = initialState, action) {
	switch(action.type) {
		case GET_ALL_TYPES:
			return {
				...state,
				types: action.payload,
                typesCopy: action.payload
			}
		default:
			return ({ ...state });
	}
}