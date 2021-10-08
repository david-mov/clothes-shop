import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../stateManagement/actions/getUser';
import { getLogout } from '../../stateManagement/actions/getLogout'

export default function ProfileView() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUser())
	},[]);
	const {user} = useSelector(state => state.userReducer);

	function handleLogout() {
		dispatch(getLogout());
	}
	return (
		<div>
			<p>name: {user?.name}</p>
			<p>email: {user?.email}</p>
			<button onClick={() => handleLogout()}>Logout</button>
		</div>
	)

}