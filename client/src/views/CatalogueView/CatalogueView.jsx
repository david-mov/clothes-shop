import NavBar from "../../components/NavBar/NavBar.jsx";
import ProductCards from "./ProductCards/ProductCards.jsx";
import "../../styles/screen.css";

export default function CatalogueView() {
  return (
    <div className="homescreen">
      <NavBar />
      <div className="homescreen__products">
        <ProductCards />
      </div>
    </div>
  );
}
