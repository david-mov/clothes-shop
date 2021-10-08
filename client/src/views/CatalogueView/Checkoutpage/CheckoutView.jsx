import NavBar from "../../components/NavBar/NavBar.jsx"
import CheckoutPage from "./CheckoutPage"
import "../../styles/screen.css";

export default function CheckoutView() {
    return (
        <div className="homescreen">
            <NavBar></NavBar>
            <h1>Checkout Cart</h1>
            <div className="homescreen__products">
                <CheckoutPage />
            </div>
        </div>

    )
}