import { 
	GET_ALL_PRODUCTS,
	GET_CATEGORY
} from '../../consts/actionConsts';

const initialState = {
	products: [],
	productsCopy: []
};

export default function productsReducer(state = initialState, action) {
	switch(action.type) {
		case GET_ALL_PRODUCTS:
			return {
				...state,
				products: action.payload
			}
			case GET_CATEGORY:
			return {
				...state,
				products: state.productsCopy.filter(e => e.categories === action.payload)
			}
		default:
			return ({ ...state });
	}
}