import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import NotFoundView from "./views/NotFoundView/NotFoundView";
import ProfileView from "./views/ProfileView/ProfileView";
import ProductView from "./views/ProductView/ProductView";
import ProductCart from "./views/ProductCart/ProductCart";
import CatalogueView from "./views/CatalogueView/CatalogueView";
import UpdateProduct from "./views/FormCrudView/FormUpdateView";
import Insert from "./views/FormCrudView/components/Insert/Insert";
import InsertCategory from "./views/FormCrudView/components/Insert/InsertCategory";
import InsertSize from "./views/FormCrudView/components/Insert/InsertSize";
import InsertType from "./views/FormCrudView/components/Insert/InsertType";
import ListAdmin from './views/AdminListView/AdminListView';
import AddImage from './views/FormCrudView/FormAddImg';
import UpdateCategories from "./views/FormCrudView/components/Update/UpdateCategories";
import UpdateZises from "./views/FormCrudView/components/Update/UpdateSizes";
import UpdateType from "./views/FormCrudView/components/Update/UpdateType";




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/catalogue' component={CatalogueView} />
        <Route exact path='/profile/:userId' component={ProfileView} />
        <Route path="/create/product/" component={Insert} />
        <Route path="/create/category" component={InsertCategory} />
        <Route path="/create/size" component={InsertSize} />
        <Route path="/create/type" component={InsertType} />
        <Route path="/update/product/:productId" component={UpdateProduct} />
        <Route path="/update/category" component={UpdateCategories} />
        <Route path="/update/size" component={UpdateZises} />
        <Route path="/update/type" component={UpdateType} />
        <Route exact path='/product/:productId' component={ProductView} />
        <Route exact path="/cart" component={ProductCart} /> 
        <Route exact path="/list" component={ListAdmin} />
        <Route exact path="/addimage/:productId" component={AddImage} />
        <Route path="*" component={NotFoundView} />
      </Switch>
    </Router>
  );
}

export default App;
