import { Component } from 'react'
import { connect } from 'react-redux'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { fetchBills } from '../actions/fetchBills'
// import Home from '../components/Home'
import Bills from '../components/Bills'



class BillsContainer extends Component {

    generateBillCards = () => {
        return this.props.bills.map(bill => <Bills key={bill.id} bill={bill}  />)
    }

    render() {
        return (
            <div>
                {/* <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
        <Route exact path='/bills' render={(routerProps) => <Bills {...routerProps} bills={this.props.bills.map((bill, index) => <div key={index} bill={bill} ></div>)}  />} />
                </Switch>
                </BrowserRouter>
             */}
             {this.generateBillCards()}
</div>
        )
    }

    componentDidMount() {
        this.props.fetchBills()
    }
}

const mapStateToProps = state => {
    return {
        bills: state.bills
    }
}

export default connect(mapStateToProps, { fetchBills })(BillsContainer)

