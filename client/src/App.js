import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import NotFoundView from "./views/NotFoundView/NotFoundView";
import ProfileView from "./views/ProfileView/ProfileView";
import ProductView from "./views/ProductView/ProductView";
import ProductCart from "./views/ProductCart/ProductCart";
import CatalogueView from "./views/CatalogueView/CatalogueView";
//import FormCrudView from "./views/FormCrudView/components/InsertCategory/InsertCategory";
import UpdateProduct from "./views/FormCrudView/components/Update/UpdateProduct";
import Insert from "./views/FormCrudView/components/Insert/Insert";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/catalogue" component={CatalogueView} />
        <Route exact path="/profile/:userId" component={ProfileView} />
        <Route exact path="/create" component={Insert} />
        <Route path="/update" component={UpdateProduct} />
        <Route exact path="/product/:productId" component={ProductView} />
        <Route exact path="/cart" component={ProductCart} />

        <Route path="*" component={NotFoundView} />
      </Switch>
    </Router>
  );
}

export default App;
