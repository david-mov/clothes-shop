import {POST_LOGIN, GET_LOGOUT, GET_USERS} from "../../consts/actionConsts"

const initialState = {
	users:[],
	user: {},
	logged: false,
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
		default:
			return { ...state };
	}
}