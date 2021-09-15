
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Edi <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
// import Home from './components/Home'
// import Bills from './components/Bills'
// import SignUp from './components/SignUp'
// import User from './components/User'
import BillsContainer from './containers/BillsContainer';


class App extends Component {
  render() {
  return (
    // <Router>
    //   <div className='app'>
    //     <Route exact path='/' component={Home} />
    //     <Route path='/bills' component={Bills} />
    //     <Route path="/sign-up" component={SignUp} /> 
    //     <Route path='/user-home' component={User} />
    //   </div>
    // </Router>
    <div className='App'>
      <BillsContainer />
    </div>
  )
  }
}

export default App