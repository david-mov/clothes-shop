import { 
	GET_ALL_PRODUCTS,
	GET_ALL_CATEGORIES,
} from '../../consts/actionConsts';

const initialState = {
	products: [],
	categories: [],
};

export default function rootReducer(state = initialState, action) {
	switch(action.type) {
		case GET_ALL_PRODUCTS:
			return ({
				...state,
				products: action.payload
			});
		case GET_ALL_CATEGORIES:
			return ({
				...state,
				categories: action.payload
			});
		default:
			return ({ ...state });
	}
}