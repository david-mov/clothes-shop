import NavBar from "../../components/NavBar/NavBar.jsx";
import CheckoutPage from "./CheckoutPage";
import "../../styles/screen.css";

export default function CheckoutView() {
  return (
    <div>
      <NavBar />
      <h1>Checkout Cart</h1>
      <div>
        <CheckoutPage />
      </div>
    </div>
  );
}
