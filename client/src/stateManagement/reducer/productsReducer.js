import {
  GET_ALL_PRODUCTS,
  GET_CATEGORY,
  GET_TYPE,
  GET_FILTER_BY_PRICE,
  GET_SEARCH,
  GET_PRODUCT_DETAILS,
  GET_UPDATE_PRODUCT_DETAILS,
  CLEAN_DETAIL_P_OBGETO,
  CLEAN_UPDATE_PRODUCT_DETAILS,
  POST_VIEW_PU,
} from "../../consts/actionConsts";

const initialState = {
  products: [],
  productsCopy: [],
  productDetails: {},
  productUpdateDetails: {},
  productViewsUsers: [],
  productRatingsUsers: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
		case GET_ALL_PRODUCTS:
			return {
				...state,
				//products: action.payload.filter(e => e.stock > 0),
        products: action.payload,
				productsCopy: action.payload
			}
    case GET_CATEGORY:
      return {
        ...state,
        products:
          action.payload === "none"
            ? state.productsCopy
            : state.productsCopy.filter((e) =>
                e.categories?.some((sne) => sne.name === action.payload)
              ),
      };
    case GET_TYPE:
      return {
        ...state,
        products:
          action.payload === "none"
            ? state.productsCopy
            : state.productsCopy.filter((e) => e.type?.name === action.payload),
      };
    case GET_FILTER_BY_PRICE:
      if (action.payload === "none") {
        return {
          ...state,
          products: state.productsCopy,
        };
      } else if (action.payload === "H") {
        return {
          ...state,
          products: state.productsCopy.sort((a, b) =>
            a.price < b.price ? 1 : -1
          ),
        };
      } else {
        return {
          ...state,
          products: state.productsCopy.sort((a, b) =>
            a.price > b.price ? 1 : -1
          ),
        };
      }
    case GET_SEARCH: {
					return {
						...state,
						products: action.payload.filter(e => e.stock > 0)
					}
				}
    case GET_PRODUCT_DETAILS: {
      return {
        ...state,
        productDetails: action.payload,
      };
    }
    case GET_UPDATE_PRODUCT_DETAILS: {
      return {
        ...state,
        productUpdateDetails: action.payload,
      };
    }

    case CLEAN_DETAIL_P_OBGETO: {
      return {
        ...state,
        productDetails: {},
      };
    }
    case CLEAN_UPDATE_PRODUCT_DETAILS: {
      return {
        ...state,
        productUpdateDetails: {},
      };
    }
    case POST_VIEW_PU:
			return {
				...state,
        productViewsUsers: action.payload,
			}
    default:
      return { ...state };
  }
}
