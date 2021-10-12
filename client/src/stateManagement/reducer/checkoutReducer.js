const initialState = {
  basket: [],
  contadorState: [],
  totalAmount: [0],
};


const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload]
      };
    case "REMOVE_ITEM":
      console.log("ACA ESTOY", action.payload)
      return {
        ...state,
        basket:  state.basket.filter(e => e.productId !== action.payload)
      };
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
            console.log("EL TOTAL AMOUNT EN REDUCER", state.totalAmount, action.payload)
            return{
              ...state,
              totalAmount: parseInt(state.totalAmount + action.payload)
            }
          case "RESTA_CONTADOR":
            return{
              ...state,
              totalAmount: action.payload >= state.totalAmount  ? 0 : parseInt(state.totalAmount - action.payload)
            }
    default:
      return state;
  }
};

export default checkoutReducer;
