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
			? <h2 className="row__title">Successful login</h2> 
			: <h2 className="row__title">Login failed</h2> 
		}
		</div>
	)
}