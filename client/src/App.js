import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import NotFoundView from "./views/NotFoundView/NotFoundView";
import FormCrudView from "./views/FormCrudView/FormCrudView";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/create" component={FormCrudView} />
        <Route path="*" component={NotFoundView} />
      </Switch>
    </Router>
  );
}

export default App;
