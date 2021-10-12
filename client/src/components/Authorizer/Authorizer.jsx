import { useUserRol } from '../../hooks/useUserRol';

export const Authorizer = ({roles, children}) => {
	const [rol] = useUserRol();
	if (roles.some(e => e === rol)) {
		return <> { children } </>
	} else {
		return (null)
	}
}