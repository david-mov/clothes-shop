import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import NotFoundView from './views/NotFoundView/NotFoundView';
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
import ProfileView from './views/ProfileView/ProfileView';
import ProductView from './views/ProductView/ProductView';
=======

>>>>>>> Stashed changes
>>>>>>> Stashed changes
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route path='*' component={NotFoundView}/> 
      </Switch>
    </Router>
  );
}

export default App;
