 import ProductosLista from '../../components/ListaProductosAdmin/ProductosLista';
 import ProductLista from '../../components/ListaProductosAdmin/ProductList';
import CategoryList from '../../components/ListaProductosAdmin/CategoryLista';

export default function HomeView() {
	return (
		<div>
			<h1>Welcome</h1>
			<CategoryList/>
		</div>
	)
}
