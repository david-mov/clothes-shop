import NavBar from "../../components/NavBar/NavBar"
import ProductCards from "../CatalogueView/ProductCards/ProductCards"

export default function HomeView() {
	return (
		<div>
			<NavBar></NavBar>
			<ProductCards/>
			<h1>Welcome</h1>
		</div>
	)
}