import { Route, Redirect } from 'react-router-dom';
import { useUserRol } from '../../hooks/useUserRol';

export const ProtectedRoute = ({component: View, roles, other, ...rest}) => {
	let [rol,ok] = useUserRol();
	if (ok) {
		return (
			<Route {...rest} render={
				(props) => {
					if (roles.some(e => e === rol)) {
						return <View {...rest} {...props} />
					} else {
						return <Redirect to={
							{
								pathname: other,
								state: {
									from: props.location
								}
							}
						}/>
					}
				}
			}/>
		)
	} else {
		return (null)
	}
}