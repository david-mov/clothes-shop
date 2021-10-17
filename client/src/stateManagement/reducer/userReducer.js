import {GET_USER, POST_LOGIN, GET_LOGOUT, GET_ALL_USER_DETAILS} from "../../consts/actionConsts"

const initialState = {
	user: {},
	logged: false,
	allUserDetails: []
};

export default function userReducer(state = initialState, action) {
	switch(action.type) {
		case GET_USER: {
			return {
				...state,
				user: action.payload,
			}
		}
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
		case GET_LOGOUT: {
			if (action.payload.status === 200) {
				return {
					...state,
					user: {},
					logged: false,
				}	
			} else {
				return { ...state }
			}	
		}
		case GET_ALL_USER_DETAILS: 
			return {
				...state,
				allUserDetails: action.payload
			}
		default:
			return { ...state };
	}
}