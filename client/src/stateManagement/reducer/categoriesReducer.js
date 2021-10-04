import { 
	GET_ALL_CATEGORIES, GET_CATEGORY,
} from '../../consts/actionConsts';
import products from "./productsReducer"


const initialState = {
	categories: [],
};

export default function categoriesReducer(state = initialState, action) {
	switch(action.type) {
		case GET_ALL_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			}
		default:
			return ({ ...state });
	}
}