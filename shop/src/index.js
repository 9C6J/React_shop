import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import { createStore } from 'redux';
let store = createStore(()=>{
  return [
    { id : 0, name : 'RedShoes', quan : 1 },
    { id : 1, name : 'NikeShoes', quan : 4 },
    { id : 2, name : 'AdidasShoes', quan : 5 },
  ]
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
