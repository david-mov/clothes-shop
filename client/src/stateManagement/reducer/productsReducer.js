import { 
	GET_ALL_PRODUCTS,
	GET_CATEGORY,
	GET_TYPE,
	GET_FILTER_BY_PRICE,
	GET_SEARCH
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
				products: action.payload.filter(e => e.stock > 0),
				productsCopy: action.payload
			}
			case GET_CATEGORY:
			return {
				...state,
				products: action.payload === "none" ? state.productsCopy : state.products.filter((e) => e.categories?.some((sne) => sne.name === action.payload))
			}
			case GET_TYPE:
			return {
				...state,
				products: action.payload === "none" ? state.productsCopy : state.products.filter((e) => e.type?.name === action.payload)
			}
			case GET_FILTER_BY_PRICE:
				if(action.payload === "none"){
					return {
						...state,
						products: state.products
					}
				}
				else if(action.payload === "H"){
					return {
						...state,
						products: state.products.sort((a, b) => (a.price < b.price) ? 1 : -1)
					}
				}else if(action.payload === "L"){
					return {
						...state,
						products: state.products.sort((a, b) => (a.price > b.price) ? 1 : -1)
					}
				}
				case GET_SEARCH: {
					return {
						...state,
						products: action.payload.filter(e => e.stock > 0)
					}
				}
		default:
			return ({ ...state });
	}
}