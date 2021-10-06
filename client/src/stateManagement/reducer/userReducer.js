import {POST_LOGIN, POST_REGISTER} from "../../consts/actionConsts"

const initialState = {
	User: {},
};

export default function userReducer(state = initialState, action) {
	switch(action.type) {
		default:
			return ({ ...state });
	}
}