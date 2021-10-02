import { useParams } from 'react-router-dom';
import NotFoundView from '../NotFoundView/NotFoundView.jsx'

export default function ProductView() {
	const { productId } = useParams();
	if (true) {
		return (
			<div>
				<h1>Product ID: {productId}</h1>
			</div>
		)		
	} else {
		return <NotFoundView />
	}
}