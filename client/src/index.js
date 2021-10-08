import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './stateManagement/store';
//import Reducer, { initialState } from './stateManagement/reducer/checkoutReducer'
//import { StateProvider } from './StateProvider'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} /*initialState={initialState} Reducer={Reducer}*/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
