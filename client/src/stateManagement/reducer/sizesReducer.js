import { 
	GET_ALL_SIZES,
} from '../../consts/actionConsts';
import products from "./productsReducer"


const initialState = {
	sizes: [],
};

export default function sizesReducer(state = initialState, action) {
	switch(action.type) {
		case GET_ALL_SIZES:
			return {
				...state,
				sizes: action.payload,
			}
		default:
			return ({ ...state });
	}
}