import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useUserRol = () => {
	let [rol, setRol] = useState(0);
	let [rolOk, setRolOk] = useState(false);
	const { logged } = useSelector(state => state.userReducer);
	useEffect(() => {
		(async function getRol() {
			try {
				const res = await axios({
					method: 'GET',
					url: '/user/rol',
					withCredentials: true,
					httpOnly: true,
				})
				setRol(res.data)
				setRolOk(true)
			}
			catch(err) {
				console.error(err);
				setRolOk(true);
			}
		})();
	}, [logged])
	return [rol, rolOk];
}