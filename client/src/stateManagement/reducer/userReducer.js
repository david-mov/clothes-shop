import {GET_USER} from "../../consts/actionConsts"

const initialState = {
	user: {
		user_rol: 0,
	},
};

export default function userReducer(state = initialState, action) {
	switch(action.type) {
		case GET_USER: {
			return {
				...state,
				user: action.payload
			}
		}
		default:
			return ({ ...state });
	}
}