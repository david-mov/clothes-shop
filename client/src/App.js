import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import NotFoundView from './views/NotFoundView/NotFoundView';
import ProfileView from './views/ProfileView/ProfileView';
import ProductView from './views/ProductView/ProductView';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/profile/:userId' component={ProfileView} />
        <Route exact path='/product/:productId' component={ProductView} />
        <Route path='*' component={NotFoundView} /> 
      </Switch>
    </Router>
  );
}

export default App;
