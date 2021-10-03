import { useParams } from 'react-router-dom';
import NotFoundView from '../NotFoundView/NotFoundView.jsx'

export default function ProfileView() {
	const { userId } = useParams();
	if (true) {
		return (
			<div>
				<h1>User ID: {userId}</h1>
			</div>
		)
	} else {
		return <NotFoundView />
	}
}