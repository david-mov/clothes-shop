import {
  GET_ALL_CART_USER,
  POST_CART_USER,
  GET_ALL_CART_TOTAL_USER,
  PUT_CART_USER,
  REMOVE_ITEM_USER
} from "../../consts/actionConsts";

const initialState = {
  cartUser: [],
  totalCartUser: [],
  contadorStateUser: [],
  totalAmountUser: 0,
  anteriorUser: [0]
};


const checkoutReducer = (state = initialState, action) => {
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
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: action.basket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_SHIPPINGDATA":
      return {
        ...state,
        shippingData: action.shippingData,
      };
    case "SET_PAYMENT_MESSAGE":
      return {
        ...state,
        paymentMessage: action.paymentMessage,
      };
    case "GET_CONTADOR":
      return {
        ...state,
        contadorStateUser: action.payload
      };
    case "GET_TOTALAMOUNT":
      return {
        ...state,
        totalAmountUser: action.payload
      }
    case "SUMA_CONTADOR":
      return {
        ...state,
        totalAmountUser: state.totalAmountUser + action.payload
      }
    case "RESTA_CONTADOR":
      return {
        ...state,
        totalAmountUser: action.payload >= state.totalAmountUser ? 0 : parseInt(state.totalAmountUser - (action.payload.cantidad * action.payload.price - action.payload.price))
      }
    case GET_ALL_CART_TOTAL_USER:
      return {
        ...state,
        totalCartUser: action.payload,
      }
    default:
      return state;
  }
};

export default checkoutReducer;
