import '../../styles/styleTablesSAA.css';
import { useDispatch } from 'react-redux';
import { getLogout } from '../../stateManagement/actions/getLogout'
import CheckoutPageUserIn from "./componets/CheckoutPageUserIn";
import { Link, useHistory } from 'react-router-dom';
import { getAllCart } from '../../stateManagement/actions/getAllCart';
import { useEffect } from 'react';
import PrepaymentPage from "./componets/PrePaymentPage";
import PaymentP from "./componets/componentsCheckIn/myShopping";
import { useUserId } from '../../hooks/useUserId';


export default function ProfileView() {

	const [user] = useUserProfile();
	const dispatch = useDispatch();
    let [user] = useUserId();
	const history = useHistory();

	function handleLogout() {
		dispatch(getLogout());
		history.push("/")
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
					<div className="cart__link"
						<h2>Hello! {user?.name}</h2>
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
			<PrepaymentPage />
            <PaymentP />

		</div>
	)
}