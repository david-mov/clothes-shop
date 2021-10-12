import axios from 'axios';
import { HOST, PORT } from '../consts/portConsts.js';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useUserRol = () => {
	let [rol, setRol] = useState(0);
	let [ok, setOk] = useState(false);
	const { logged } = useSelector(state => state.userReducer);
	useEffect(() => {
		(async function getRol() {
			try {
				const res = await axios({
					method: 'GET',
					url: `http://${HOST}:${PORT}/user/rol`,
					withCredentials: true,
					httpOnly: true,
				})
				setRol(res.data)
				setOk(true)
			}
			catch(err) {
				console.error(err);
				setOk(true);
			}
		})();
	}, [logged])
	return [rol, ok];
}