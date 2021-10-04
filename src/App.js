import { Component } from 'react'
import BillsContainer from './containers/BillsContainer'
import Footer from '../src/components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BillsContainer />
        <Footer />
      </div>
    )
  }
}
export default App