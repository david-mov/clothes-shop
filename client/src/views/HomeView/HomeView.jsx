import NavBar from "../../components/NavBar/NavBar"
import ProductCards from "../CatalogueView/ProductCards/ProductCards"
import "./HomeView.css"


export default function HomeView() {
	return (
		<div className="homescreen">
			<NavBar></NavBar>
			<div className="homescreen__products">
			<ProductCards/>
			</div>
		</div>
	)
}