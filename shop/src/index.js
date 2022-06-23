import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useNavigate} from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';
// let store = createStore(()=>{
//   return [
//     { id : 0, name : 'RedShoes', quan : 1 },
//     { id : 1, name : 'NikeShoes', quan : 4 },
//     { id : 2, name : 'AdidasShoes', quan : 5 },
//   ]
// });

let oItem = [
  { id : 6, name : 'RedShoes', quan : 1 },
    { id : 7, name : 'NikeShoes', quan : 4 },
    { id : 8, name : 'AdidasShoes', quan : 5 },
]

// 상태변수 수정하는 방법
// oItem = default parameter
function reducer(state = oItem, action){
  let target;
  let oData = [...state];

  switch(action.type){
    case 'addItem':
      var oGetItem = action.payload.oSelectedItem;
      var obj = oData.find(o=> o.id === oGetItem.id);

      if(!obj){
        oData.push({
          id : oGetItem.id,
          name : oGetItem.title,
          quan : 1
        });
      }else{
        obj.quan++;
      }
      return oData
      break;
    case 'addQuan':
      target = action.payload.a;
      oData.find(o=>o.id === target.id).quan++;
      return oData
      break;
    case 'minusQuan':
      target = action.payload.a;
      var obj = oData.find(o=>o.id === target.id);
      if ( obj && obj.quan > 0) obj.quan --;
      return oData
      break;
    default :
      return state
  }
}

// Cart.js 만 사용하므로 redux store 필요 X
let bStatus = true;
function reducer2(state = bStatus, action){
  if(action.type === 'closeAlert'){
    state = false;
    return state
  }else{
    return state
  }
}

// let store = createStore(reducer);
let store = createStore(combineReducers({reducer,reducer2}));


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
