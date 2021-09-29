import './App.css';
import { Route } from "react-router-dom";
import CatalogueView from "./views/CatalogueView/CatalogueView"

function App() {
  return (
    <div className="App">
      <h1>Henry Final Project</h1>
      <Route exact path="/product" component={CatalogueView}></Route>
      <Route exact path="/product/:id" component={ProductDetail}></Route>
    </div>
  );
}

export default App;
