/*import {createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from  "redux-thunk";
import rootReducer from "../reducer";

const composeEnhancer = composeWithDevTools || compose;

const store = createStore(
	rootReducer, 
	composeEnhancer(applyMiddleware(thunk))
);

export default store;*/

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "../reducer/cartReducers";
import {
	getProductsReducer,
	getProductDetailsReducer,
} from "../reducer/productReducers";

const reducer = combineReducers({
	cart: cartReducer,
	getProducts: getProductsReducer,
	getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: [];

const INITIAL_STATE = {
	cart: {
		cartItems: cartItemsInLocalStorage,
	},
};

const store = createStore(
	reducer,
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
