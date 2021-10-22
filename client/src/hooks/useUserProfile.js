import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useUserProfile = () => {
	let [profile, setProfile] = useState({});
	let [profileOk, setProfileOk] = useState(false);
	const { logged } = useSelector(state => state.userReducer);
	useEffect(() => {
		(async function getProfile() {
			try {
				const res = await axios({
					method: 'GET',
					url: '/user/info',
					withCredentials: true,
					httpOnly: true,
				})
				setProfile(res.data)
				setProfileOk(true)
			}
			catch(err) {
				console.error(err);
				setProfileOk(true);
			}
		})();
	}, [logged])
	return [profile, profileOk];
}