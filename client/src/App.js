import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import NotFoundView from './views/NotFoundView/NotFoundView';
import ProfileView from './views/ProfileView/ProfileView';
import ProductView from './views/ProductView/ProductView';
import ProductCart from "./views/ProductCart/ProductCart"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/profile/:userId' component={ProfileView} />
        <Route exact path='/product/:productId' component={ProductView} />
        <Route exact path="/cart" component={ProductCart} /> 
        <Route path="/product:id"></Route>
      </Switch>
    </Router>
  );
}

export default App;
