import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useUserId = () => {
	let [id, setId] = useState(null);
	let [idOk, setIdOk] = useState(false);
	const { logged } = useSelector(state => state.userReducer);
	useEffect(() => {
		(async function getId() {
			try {
				const res = await axios({
					method: 'GET',
					url: '/user/id',
					withCredentials: true,
					httpOnly: true,
				})
				setId(res.data)
				setIdOk(true)
			}
			catch(err) {
				console.error(err);
				setIdOk(true);
			}
		})();
	}, [logged])
	return [id, idOk];
}