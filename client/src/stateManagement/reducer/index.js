import {
  GET_ALL_PRODUCTS,
  GET_ALL_CATEGORIES,
  POST_ALL_PRODUCTS,
  GET_ALL_SIZE,
  GET_ALL_TYPES,
  POS_PRODUCT,
} from "../../consts/actionConsts";

const initialState = {
  products: [],
  categories: [],
  sizes: [],
  types: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case POST_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
      };
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_ALL_SIZE:
      return {
        ...state,
        sizes: action.payload,
      };
    case GET_ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case POS_PRODUCT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
