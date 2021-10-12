import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView/HomeIniView";
import NotFoundView from "./views/NotFoundView/NotFoundView";
import ProfileView from "./views/ProfileView/ProfileView";
import ProductView from "./views/ProductView/ProductView";
import ProductCart from "./views/ProductCart/ProductCart";
import CatalogueView from "./views/CatalogueView/CatalogueView";
import UpdateProduct from "./views/FormCrudView/FormUpdateView";
import Insert from "./views/FormCrudView/FormCrudView";
import InsertCategory from "./views/FormCrudView/InsertCategoriesView";
import InsertSize from "./views/FormCrudView/InsertSizeView";
import InsertType from "./views/FormCrudView/InsertTypeView";
import ListAdmin from "./views/AdminListView/AdminListView";
import LoginView from "./views/LoginView/LoginView";
import SignupView from "./views/SignupView/SignupView";
import AddImage from "./views/FormCrudView/FormAddImg";
import InfoProduct from "./views/DetalleAdmin/AdminInfoView";
import CheckoutPage from "./views/CatalogueView/Checkoutpage/CheckoutPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import UpdateCategories from "./views/FormCrudView/UpdateCategoriesView";
import UpdateZises from "./views/FormCrudView/InsertSizeView";
import UpdateType from "./views/FormCrudView/InsertTypeView";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/catalogue" component={CatalogueView} />
        <ProtectedRoute
          exact
          path="/profile"
          component={ProfileView}
          roles={[1, 2, 3]}
          other="/login"
        />
        <Route exact path="/create/product/" component={Insert} />
        <Route exact path="/create/category" component={InsertCategory} />
        <Route exact path="/create/size" component={InsertSize} />
        <Route exact path="/create/type" component={InsertType} />
        <Route
          exact
          path="/update/product/:productId"
          component={UpdateProduct}
        />
        <Route exact path="/update/category" component={UpdateCategories} />
        <Route exact path="/update/size" component={UpdateZises} />
        <Route exact path="/update/type" component={UpdateType} />
        <Route exact path="/product/:productId" component={ProductView} />
        <Route exact path="/CheckoutPage" component={CheckoutPage} />
        <Route exact path="/cart" component={ProductCart} />
        <Route exact path="/list" component={ListAdmin} />
        <ProtectedRoute
          exact
          path="/login"
          component={LoginView}
          roles={[0]}
          other="/"
        />
        <ProtectedRoute
          exact
          path="/signup"
          component={SignupView}
          roles={[0]}
          other="/"
        />
        <Route exact path="/addimage/:productId" component={AddImage} />
        <Route exact path="/info/product/:productId" component={InfoProduct} />
        <Route path="*" component={NotFoundView} />
      </Switch>
    </Router>
  );
}

export default App;
