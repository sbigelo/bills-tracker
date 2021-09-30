import { Component } from 'react'
import { connect } from 'react-redux'
import { addBill } from '../actions/addBill'

class BillInput extends Component {
    state = {
        company_name: '',
        due_date: '',
        amount_due: '',
        notes: '',
        paid_status: '',
        id: 0
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            id: 4
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addBill(this.state)
        this.setState({
            company_name: '',
            due_date: '',
            amount_due: '',
            notes: '',
            paid_status: '',
            id: 0
        })
    }

    render() {
        return (
            
              
                <div className="form-container">
                <h1>Create New Bill</h1>
                    <form onSubmit={this.handleOnSubmit}>
                        
                            <input type="text" placeholder="Company Name" value={this.state.company_name} name="company_name" onChange={this.handleOnChange} />
                        
                        
                            <input type="text" placeholder="Due Date" value={this.state.due_date} name="due_date" onChange={this.handleOnChange} />
                        
                        
                            <input type="text" placeholder="Amount Due" value={this.state.amount_due} name="amount_due" onChange={this.handleOnChange} />
                        
                        
                            <input type="text" placeholder="Paid Status" value={this.state.paid_status} name="paid_status" onChange={this.handleOnChange} />
                        
                        
                            <input type="text" placeholder="Notes" value={this.state.notes} name="notes" onChange={this.handleOnChange} />
                        

                        <button type="submit">Create New Bill</button>
            
                    </form>
                </div>
            
        )
    }
}

export default connect(null, { addBill })(BillInput)
