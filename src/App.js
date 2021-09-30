import { Component } from 'react'
import BillsContainer from './containers/BillsContainer'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BillsContainer />
      </div>
    )
  }
}
export default App