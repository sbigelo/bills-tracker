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

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// import { Provider } from 'react-redux';
// import { applyMiddleware, createStore, compose } from 'redux'
// import thunk from 'redux-thunk'
// import manageBills from './reducers/manageBills';
// // import store from './store'

// import { BrowserRouter as Router } from 'react-router-dom'


// const store = createStore(manageBills, compose(applyMiddleware(thunk)))

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//     <App />
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );


// ????????????????????????????


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// // import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { PersistGate } from 'redux-persist/integration/react'

// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './index.css';

// import userReducer from './reducers/userReducer'
// // import JobApplicationInput from './components/JobApplicationInput';
// import App from './App';
// import User from './components/User';
// // import About from './components/About';
// import SignUp from './components/SignUp'
// import LogIn from './components/LogIn'
// import Logout from './components/Logout';
// // import JobAppView from './components/JobAppView';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, userReducer)



// const store = createStore(persistedReducer, composeEnhancers(
//   applyMiddleware(thunk)
// ))

// let persistor = persistStore(store)

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <BrowserRouter basename={process.env.PUBLIC_URL}>
//         <Route exact path="/" component={App} />
//         <Route path="/home" component={User} />
//         {/* <Route path="/about" component={About} /> */}
//         <Route path="/sign-up" component={SignUp} />
//         <Route path="/login" component={LogIn} />
//         <Route path='/logout' component={Logout} />
//         {/* <Route path="/add-job" component={JobApplicationInput} />
//         <Route path="/job-app/:jobId" render={routerProps => <JobAppView {...routerProps} />} /> */}
//       </BrowserRouter>
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import manageBills from './reducers/manageBills'
import { BrowserRouter as Router } from 'react-router-dom'

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;


const store = createStore(
  manageBills,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);