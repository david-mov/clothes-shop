import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../stateManagement/actions/getUser'

export default function ProfileView() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUser())
	},[]);
	const {user} = useSelector(state => state.userReducer)
	return (
		<div>
			<p>name: {user?.name}</p>
			<p>email: {user?.email}</p>
		</div>
	)

}