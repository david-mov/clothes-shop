import { 
	CLEAN_UPDATE_PRODUCT_DETAILS,
	GET_ALL_CATEGORIES, GET_UPDATE_CATEGORY_DETAILS,
} from '../../consts/actionConsts';
//import products from "./productsReducer"


const initialState = {
	categories: [],
	categoryUpdateDetails: {},
};

export default function categoriesReducer(state = initialState, action) {
	switch(action.type) {
		case GET_ALL_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			}
			case GET_UPDATE_CATEGORY_DETAILS:
				return {
					...state,
					categoryUpdateDetails: action.payload
				}
				case CLEAN_UPDATE_PRODUCT_DETAILS: {
					return {
						...state,
						categoryUpdateDetails: {},
					};
				}
		default:
			return ({ ...state });
	}
}