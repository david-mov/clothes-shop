import {
	POST_LOGIN,
	POST_SIGNUP, 
	GET_LOGOUT, 
	GET_USERS, 
	GET_ALL_USER_DETAILS,
	GET_USER_ID_PARAMS, 
	CLEAN_UPDATE_PRODUCT_DETAILS, 
	GET_USER_DETAIL,
	GET_GOOGLE_LOGIN
} from "../../consts/actionConsts"

const initialState = {
	users:[],
	user: {},
	logged: false,
	signup: false,
	allUserDetails: [],
	userDetailIdParams: {},
	userDetails: {}
};

export default function userReducer(state = initialState, action) {
	switch(action.type) {
		case POST_LOGIN: {
			if (action.payload.status === 200) {
				return {
					...state,
					logged: true,
				}				
			} else {
				return { ...state }
			}
		}
		case POST_SIGNUP:{
			if (action.payload.status === 200) {
				return {
					...state,
					signup: true,
				}				
			} else {
				return { ...state }
			}

		}
		case GET_LOGOUT: {
			
			if (action.payload.status === 200) {
				return {
					...state,
					logged: false,
				}	
			} else {
				return { ...state }
			}	
		}
		case GET_USERS: 
			return {
			...state,
			users: action.payload,

		}

		case GET_ALL_USER_DETAILS: 
			return {
				...state,
				allUserDetails: action.payload
			}

		case GET_USER_ID_PARAMS: 
			return {
				...state,
				userDetailIdParams: action.payload
			}

		case CLEAN_UPDATE_PRODUCT_DETAILS:
				return {
					...state,
					userDetailIdParams: {},
					userDetails: {}
				}

		case GET_USER_DETAIL:
				return {
					...state,
					userDetails: action.payload
				}
		case GET_GOOGLE_LOGIN:
			if (action.payload.status === 200) {
				return {
					...state,
					logged: true,
				}				
			} else {
				return { ...state }
			}
		default:
			return { ...state };
	}
}