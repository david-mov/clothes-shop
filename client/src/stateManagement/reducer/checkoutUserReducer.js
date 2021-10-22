import {
  GET_ALL_CART_USER,
  POST_CART_USER,
  GET_ALL_CART_TOTAL_USER,
  PUT_CART_USER,
  REMOVE_ITEM_USER,
  POST_CART_ORDER,
  GET_CART_ORDER
} from "../../consts/actionConsts";

const initialState = {
  cartUser: [],
  totalCartUser: [],
  contadorStateUser: [],
  totalAmountUser: 0,
  anteriorUser: [0],
  totalOrders: []
};


const checkoutUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CART_USER:
      return {
        ...state,
        totalCartUser: action.payload,
      }
    case GET_ALL_CART_USER:
      return {
        ...state,
        totalCartUser: action.payload
      }
    case REMOVE_ITEM_USER:
      return {
        ...state,
        totalCartUser: action.payload
      };
    case PUT_CART_USER:
      return {
        ...state,
        totalCartUser: action.payload
      }
    case GET_ALL_CART_TOTAL_USER:
      return {
        ...state,
        totalCartUser: action.payload,
      }
    case GET_ALL_CART_USER:
      return {
        ...state,
        cartUser: action.payload,
      }
    case POST_CART_ORDER:
      return {
        ...state,
        totalOrders: action.payload,
      }
      case GET_CART_ORDER:
        return {
          ...state,
          totalOrders: action.payload,
        }

    default:
      return state;
  }
};

export default checkoutUserReducer;
