import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import NotFoundView from "./views/NotFoundView/NotFoundView";
import ProfileView from "./views/ProfileView/ProfileView";
import ProductView from "./views/ProductView/ProductView";
import ProductCart from "./views/ProductCart/ProductCart";
import CatalogueView from "./views/CatalogueView/CatalogueView";
import UpdateProduct from "./views/FormCrudView/components/Update/UpdateProduct";
import Insert from "./views/FormCrudView/components/Insert/Insert";
import ListAdmin from './views/AdminListView/AdminListView';
import AddImage from './components/agregarImagenProduct/FormAddImg'




function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={HomeView} />
        <Route exact path="/catalogue" component={CatalogueView} />
        <Route exact path="/profile/:userId" component={ProfileView} />
        <Route exact path="/create" component={Insert} />
        <Route path="/update/" component={UpdateProduct} />
        <Route exact path="/product/:productId" component={ProductView} />
        <Route exact path="/cart" component={ProductCart} />
        <Route exact path="/list" component={ListAdmin} />
<<<<<<< HEAD
        <Route exact path="/addimage" component={AddImage} />
=======


>>>>>>> c44b6f8ae5169bf42b20ddee16138b0cfee5878e
        <Route path="*" component={NotFoundView} />


      </Switch>
    </Router>
  );
}

export default App;
