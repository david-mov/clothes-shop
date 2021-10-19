import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView/HomeIniView";
import NotFoundView from "./views/NotFoundView/NotFoundView";
import ProfileView from "./views/ProfileView/ProfileView";
import ProductView from "./views/ProductView/ProductView2";
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
import CheckoutPage from "./views/CatalogueView/Checkoutpage/CheckoutView";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import UpdateCategories from "./views/FormCrudView/UpdateCategoriesView";
import UpdateZises from "./views/FormCrudView/UpdateSizesView";
import UpdateType from "./views/FormCrudView/UpdateTypesView";
import SuperAView from "./views/SuperAdminView/SuperAdminView";
import AdminView from "./views/AdminView/AdminView";
import CheckoutPrePayment from "./views/CheckoutPayment/CheckoutPrePayment";
import CheckoutView from "./views/CheckoutPayment/CheckoutView";
import ContactUs from "../src/components/Email/emailSender"


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
          roles={[1,3]}
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
        <Route
          exact
          path="/update/category/:productId"
          component={UpdateCategories}
        />
        <Route exact path="/update/size/:productId" component={UpdateZises} />
        <Route exact path="/update/type/:productId" component={UpdateType} />
        <Route exact path="/product/:productId" component={ProductView} />
        <Route exact path="/CheckoutPage" component={CheckoutPage} />
          <Route path= "/checkout/:id" component ={CheckoutView} />
        {/* <Route exact path="/Checkout" component={CheckoutPrePayment} /> */}
        <Route exact path="/cart" component={ProductCart} />
        <Route exact path="/list" component={ListAdmin} />
        <ProtectedRoute
          exact
          path="/login"
          component={LoginView}
          roles={[0,1,2,3]}
          // other="/"
        />
        <ProtectedRoute
          exact
          path="/signup"
          component={SignupView}
          roles={[0,1,2,3]}
          other="/"
        />
        <Route exact path="/addimage/:productId" component={AddImage} />
        <Route exact path="/info/product/:productId" component={InfoProduct} />
        <ProtectedRoute exact path="/superadmin" component={SuperAView}
        roles={[1]} other="/login"/>
        <ProtectedRoute exact path="/admin" component={AdminView}
        roles={[2]} other="/login"/>
        <Route path="/mensaje" component={ContactUs}></Route>
        <Route path="*" component={NotFoundView} />

      </Switch>
    </Router>
  );
}

export default App;
