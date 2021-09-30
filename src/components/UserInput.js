import { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/addUser'

class UserInput extends Component {

    state = {
        first_name: '',
        last_name: '',
        bill_id: this.props.billId
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            bill_id: this.props.billId
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addUser(this.state, this.props.bill.id)
        this.setState({
            first_name: '',
            last_name: ''
        })
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                <div>
                <input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.handleOnChange}/>
                </div>
                <div>
                <input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.handleOnChange}/>
                </div>
                <button type="submit">Add</button>
                </form>
            </div>
        )
    }

}
export default connect(null, { addUser })(UserInput)