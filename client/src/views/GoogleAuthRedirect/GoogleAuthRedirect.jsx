import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const GoogleAuthRedirect = () => {
	const { status } = useParams();
	useEffect(() => {
		setTimeout(() => {
			window.close();
		}, 1000)
	}, [])
	return (
		<div>
		{ 
			(status === 'success') 
			? <h2>Successful login</h2> 
			: <h2>Login failed</h2> 
		}
		</div>
	)
}