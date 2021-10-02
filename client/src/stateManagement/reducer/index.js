import { combineReducer } from 'redux';
import categoriesReducer from './categoriesReducer.js'
import productsReducer from './productsReducer.js'

export default combineReducer(
	categoriesReducer,
	productsReducer
)