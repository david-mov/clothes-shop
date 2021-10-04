
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import NotFoundView from './views/NotFoundView/NotFoundView';
import ProfileView from './views/ProfileView/ProfileView';
import ProductView from './views/ProductView/ProductView';
import ProductCart from "./views/ProductCart/ProductCart";
import CatalogueView from './views/CatalogueView/CatalogueView';
import FormCrudView from './views/FormCrudView/FormCrudView';
import FormCateView from './views/FormCrudView/FormCateView';
import FormSizeView from './views/FormCrudView/FormSizeView';
import FormTypeView from './views/FormCrudView/FormTypeView';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/catalogue' component={CatalogueView} />
        <Route exact path='/profile/:userId' component={ProfileView} />
        <Route path="/create/product" component={FormCrudView} />
        <Route path="/create/category" component={FormCateView} />
        <Route path="/create/size" component={FormSizeView} />
        <Route path="/create/type" component={FormTypeView} />
        <Route exact path='/product/:productId' component={ProductView} />
        <Route exact path="/cart" component={ProductCart} /> 
        <Route path="*" component={NotFoundView} />
      </Switch>
    </Router>
  );
}

export default App;
