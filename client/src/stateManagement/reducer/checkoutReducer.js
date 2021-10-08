const initialState = {
  basket: [],
  //user: null,
  //shippingData: {},
  //paymentMessage: "",
};



export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const checkoutReducer = (state = initialState, action) => {
  console.log(action, "linea 20");
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log(action.payload, "Linea 22")
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_ITEM":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(`Cant remove product (id: ${action.payload})!`);
      }
      return {
        ...state,
        basket: newBasket,
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
    default:
      return state;
  }
};

export default checkoutReducer;
