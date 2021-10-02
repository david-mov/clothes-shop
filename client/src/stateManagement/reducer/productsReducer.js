import { 
	GET_ALL_PRODUCTS,
} from '../../consts/actionConsts';

const initialState = {
	products: [],
};

export default function productsReducer(state = initialState, action) {
	switch(action.type) {
		case GET_ALL_PRODUCTS:
			return ({
				...state,
				products: action.payload
			});
		default:
			return ({ ...state });
	}
}