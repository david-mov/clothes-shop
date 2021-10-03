import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer.js'
import productsReducer from './productsReducer.js'
import typesReducer from "./typesReducer.js"


export default combineReducers({ 
	categoriesReducer,
	productsReducer,
	typesReducer

}
)