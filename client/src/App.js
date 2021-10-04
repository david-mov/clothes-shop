import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import NotFoundView from './views/NotFoundView/NotFoundView';


// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./views/CartScreen";



function App() {
  return (
    <Router>
      <main>
        <Switch>
          {/*<Route exact path='/' component={HomeView} />*/}
          <Route exact path='/' component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route path='*' component={NotFoundView} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
