import { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchBills } from '../actions/fetchBills'
import Bills from '../components/Bills'
import BillList from '../components/BillList'
import NavBar from '../components/NavBar'
import Home from '../components/Home'

class BillsContainer extends Component {

    render() {
        return(
            <div>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/bills/:slug' render={(routerProps) => <Bills {...routerProps} bills={this.props.bills && this.props.bills} key={routerProps.id} /> } />
                    <Route exact path='/bills' render={(routerProps) => <BillList {...routerProps} bills={this.props.bills} /> } />
                </Switch>
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