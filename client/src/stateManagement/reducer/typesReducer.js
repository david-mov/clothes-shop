import { 
	CLEAN_UPDATE_PRODUCT_DETAILS,
	GET_ALL_TYPES, GET_UPDATE_TYPE_DETAILS
} from '../../consts/actionConsts';

const initialState = {
	types: [],
	updateTypeDetails: {}
};

export default function typesReducer(state = initialState, action) {
	switch(action.type) {
		case GET_ALL_TYPES:
			return {
				...state,
				types: action.payload,
			}
			case GET_UPDATE_TYPE_DETAILS:
				return {
					...state,
					updateTypeDetails: action.payload
				}
				case CLEAN_UPDATE_PRODUCT_DETAILS:
					return {
						state,
						updateTypeDetails: {}
					}
		default:
			return ({ ...state });
	}
}