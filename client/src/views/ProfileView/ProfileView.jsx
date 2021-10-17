import '../../styles/styleTablesSAA.css';
import { useUserProfile } from '../../hooks/useUserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { getLogout } from '../../stateManagement/actions/getLogout'
import CheckoutPageUserIn from "./componets/CheckoutPageUserIn";
import { Link } from 'react-router-dom';
import { getAllCart } from '../../stateManagement/actions/getAllCart';
import { useEffect } from 'react';
import TableUser from './componets/TablaUser';

export default function ProfileView() {
	let user = useUserProfile();
	const dispatch = useDispatch();
	function handleLogout() {
		dispatch(getLogout());
	}

	useEffect(() => {
	  dispatch(getAllCart());
	}, [dispatch]);

	return (
		<div>
			<div className="todo">
				<div className="navbar">
					<div className="navbar__logo">
						<img
							className="img"
							src="https://i.ibb.co/jwF67rm/clothes-Shop.png"
							alt="clothes-Shop"
							border="0"
						></img>
					</div>
					<div className="cart__link">
						<h2>Hello!</h2>
						{/* <p>name: {user?.name}</p>
						<p>email: {user?.email}</p> */}
					</div>
					<ul className="navbar__links">						
						<li className="saco">
							<Link to="/catalogue" className="cart__link">
								<i className="fas fa-arrow-left fa-1x"></i>
								<span>
									Go to catalogue 
								</span>
							</Link>
						</li>
						<li className="saco">
							<button onClick={() => handleLogout()}>
								<span>
									Logout
								</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
			<CheckoutPageUserIn />
			<TableUser />

		</div>
	)
}