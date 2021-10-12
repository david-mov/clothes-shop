import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer.js'
import productsReducer from './productsReducer.js'
import typesReducer from "./typesReducer.js"
import sizesReducer from './sizesReducer.js'
import userReducer from './userReducer.js'
import checkoutReducer from './checkoutReducer.js'


export default combineReducers({
	categoriesReducer,
	productsReducer,
	typesReducer,
  userReducer,
	sizesReducer,
	checkoutReducer
})

