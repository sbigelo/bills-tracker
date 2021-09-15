// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import {Provider} from 'react-dom'
// import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
// import userReducer from './reducers/userReducer'

// import reportWebVitals from './reportWebVitals';

// const store = createStore(userReducer, compose(applyMiddleware(thunk)))

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import manageBills from './reducers/manageBills';
// import store from './store'



const store = createStore(manageBills, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);