import { GET_ALL_CART } from "../../consts/actionConsts";

const initialState = {
  cart: [],
  contadorState: [],
  totalAmount: 0,
  anterior: [0]
};


const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_CART":
      return {
        ...state,
        cart: action.payload,
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: action.payload
      };
      case "PUT_CART":
        return {
          ...state,
          cart: action.payload
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
        console.log("EL REDUCER CONTADOR", state.contador)
        return {
          ...state,
          contadorState: action.payload
        };
        case "GET_TOTALAMOUNT":
          return {
            ...state,
            totalAmount: action.payload
          }
          case "SUMA_CONTADOR":
            return{
              ...state,
              totalAmount: state.totalAmount + action.payload
            }
          case "RESTA_CONTADOR":
            return{
              ...state,
              totalAmount: action.payload >= state.totalAmount  ? 0 : parseInt(state.totalAmount - (action.payload.cantidad * action.payload.price - action.payload.price))
            }
            case GET_ALL_CART:
              return {
                ...state,
                cart: action.payload,
              }
    default:
      return state;
  }
};

export default checkoutReducer;
