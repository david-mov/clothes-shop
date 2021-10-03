import { 
	GET_ALL_PRODUCTS,
	GET_CATEGORY,
	GET_TYPE
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
				products: action.payload,
				productsCopy: action.payload
			}
			case GET_CATEGORY:
			return {
				...state,
				products: state.productsCopy.filter((e) => e.categories?.some((sne) => sne.name === action.payload))
			}
			case GET_TYPE: 
			console.log("ENTRE EN EL REDUCER DE TYPE")
			console.log(action.payload)
			return {
				...state,
				products: state.productsCopy.filter((e) => e.type?.name === action.payload)
			}
		default:
			return ({ ...state });
	}
}