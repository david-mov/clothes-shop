import {POST_LOGIN, POST_REGISTER} from "../../consts/actionConsts"

const initialState = {
	User: {},
};

export default function userReducer(state = initialState, action) {
	switch(action.type) {
		case POST_LOGIN:
			const { token } = action.payload;
                localStorage.setItem('token', token);
				console.log(localStorage)
			console.log(state.User)
			return{
				...state,
				User: action.payload
			}
		default:
			return ({ ...state });
	}
}