import {GET_USER} from "../../consts/actionConsts"

const initialState = {
	user: {},
};

export default function userReducer(state = initialState, action) {
	switch(action.type) {
		case GET_USER: {
			console.log(action.payload);
			return {
				...state,
				user: action.payload
			}
		}
		default:
			return ({ ...state });
	}
}