import { useUserProfile } from '../../hooks/useUserProfile';
import { useDispatch } from 'react-redux';
import { getLogout } from '../../stateManagement/actions/getLogout'

export default function ProfileView() {
	let user = useUserProfile();
	const dispatch = useDispatch();
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