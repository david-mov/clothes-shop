import NavBar from "../../components/NavBar/NavBar.jsx";
import ProductCards2 from "./ProductCards/ProductCards2.jsx";
import "../../styles/screen.css";

export default function CatalogueView() {
  return (
    <div className="homescreen">
      <NavBar />
      <div className="homescreen__products">
        <ProductCards2 />
      </div>
    </div>
  );
}
