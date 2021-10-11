import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../../stateManagement/actions/getUser';

export const Authorizer = ({roles, children}) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUser());
	}, [])
	const { user_rol } = useSelector(state => state.userReducer.user);
	if (roles.some(e => e === user_rol)) {
		return <> { children } </>
	} else {
		return (null)
	}
}