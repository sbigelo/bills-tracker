import { Component } from 'react'
import { connect } from 'react-redux'
import { editBill } from '../actions/editBill'

class BillEdit extends Component {
    state = {
        company_name: '',
        due_date: '',
        amount_due: '',
        paid_status: '',
        notes: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        let bill = { ...this.state, id: this.props.bill.id }
        debugger
        this.props.editBill(bill)
        this.setState({
            company_name: '',
            due_date: '',
            amount_due: '',
            paid_status: '',
            notes: ''
        })
    }



    render() {
        return (
                <div className="form-container">
                <h1>Edit Bill</h1>
                    <form onSubmit={this.handleOnSubmit}>
                       
                    <input type="text" placeholder="Company Name" value={this.state.company_name} name="company_name" onChange={this.handleOnChange}/>
                                              
                    <input type="text" placeholder="Due Date" value={this.state.due_date} name="due_date" onChange={this.handleOnChange}/>
                                              
                    <input type="text" placeholder="Amount Due" value={this.state.amount_due} name="amount_due" onChange={this.handleOnChange}/>
                        
                    <input type="text" placeholder="Paid Status" value={this.state.paid_status} name="paid_status" onChange={this.handleOnChange}/>

                    <input type="text" placeholder="Notes" value={this.state.notes} name="notes" onChange={this.handleOnChange}/>
                        
                    <button type="submit">Edit Bill</button>
                    </form>
                </div>
        )
    }
}

BillEdit.defaultProps = {
    bills: {}
}


export default connect(null, { editBill })(BillEdit)