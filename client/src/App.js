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
import InsertCategory from "./views/FormCrudView/components/Insert/InsertCategory";
import InsertSize from "./views/FormCrudView/components/Insert/InsertSize";
import InsertType from "./views/FormCrudView/components/Insert/InsertType";
import ListAdmin from './views/AdminListView/AdminListView';
import AddImage from './components/agregarImagenProduct/FormAddImg'
import LoginView from "./views/Login/LoginView";
import RegisterView from "./views/Register/RegisterView";




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/catalogue' component={CatalogueView} />
        <Route exact path='/profile' component={ProfileView} />
        <Route path="/create/product" component={Insert} />
        <Route path="/create/category" component={InsertCategory} />
        <Route path="/create/size" component={InsertSize} />
        <Route path="/create/type" component={InsertType} />
        <Route path="/update/product" component={UpdateProduct} />
        <Route path="/update/category" component={UpdateProduct} />
        <Route path="/update/size" component={UpdateProduct} />
        <Route path="/update/type" component={UpdateProduct} />
        <Route exact path='/product/:productId' component={ProductView} />
        <Route exact path="/cart" component={ProductCart} /> 
        <Route exact path="/list" component={ListAdmin} />
        <Route exact path="/addimage" component={AddImage} />
        <Route path="/login" component={LoginView} />
        <Route path="/register" component={RegisterView} />
        <Route path="*" component={NotFoundView} />
      </Switch>
    </Router>
  );
}

export default App;
