const initialState = {
  basket: [],
  contadorState: []
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
        return {
          ...state,
          contadorState: action.payload
        }
    default:
      return state;
  }
};

export default checkoutReducer;
