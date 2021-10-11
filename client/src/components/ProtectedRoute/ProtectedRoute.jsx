import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../../stateManagement/actions/getUser';

export const ProtectedRoute = ({component: Component, roles, ...rest}) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUser());
	}, [])
	const { user_rol } = useSelector(state => state.userReducer.user);
	return (
		<Route {...rest} render={
			(props) => {
				if (roles.some(e => e === user_rol)) {
					return <Component {...props}/>
				} else {
					return <Redirect to={
						{
							pathname:'/',
							state: {
								from: props.location
							}							
						}
					}/>
				}
			}
		}/>
	)
}