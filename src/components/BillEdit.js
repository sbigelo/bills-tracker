import { Component } from 'react'
import { connect } from 'react-redux'
import { editBill } from '../actions/editBill'
import styled from "styled-components"

class BillEdit extends Component {
    state = {
        company_name: this.props.bill.company_name,
        due_date: this.props.bill.due_date,
        amount_due: this.props.bill.amount_due,
        paid_status: this.props.bill.paid_status,
        notes: this.props.bill.notes
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        let bill = { ...this.state, id: this.props.bill.id }
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
                <BillWrapper>
                <Header>Edit Bill</Header>
                    <form onSubmit={this.handleOnSubmit}>
                    <Wrap>
                    <input type="text" placeholder="Company Name" value={this.state.company_name} name="company_name" onChange={this.handleOnChange}/>
                    </Wrap>  
                    <Wrap>             
                    <input type="text" placeholder="Due Date" value={this.state.due_date} name="due_date" onChange={this.handleOnChange}/>
                    </Wrap> 
                    <Wrap>                  
                    <input type="text" placeholder="Amount Due" value={this.state.amount_due} name="amount_due" onChange={this.handleOnChange}/>
                    </Wrap>
                    <Wrap> 
                    <input type="text" placeholder="Paid Status" value={this.state.paid_status} name="paid_status" onChange={this.handleOnChange}/>
                    </Wrap>
                    <Wrap> 
                    <input type="text" placeholder="Notes" value={this.state.notes} name="notes" onChange={this.handleOnChange}/>
                    </Wrap>
               
                    <SubmitButton type="submit">Confirm</SubmitButton>
                    </form>
                </BillWrapper>
        )
    }
}




export default connect(null, { editBill })(BillEdit)

const Header = styled.div`
  text-align: center;
  font-size:30px;
  padding: 15px 0;
  font-weight: bold;
  color: black;
`

const BillWrapper = styled.div`
  background:white;
  padding:20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom:80px;
  border-left: 1px solid rgba(0,0,0,0.1);
  height: 100vh;
  padding-top: 100px;
  background: #f6f1f0;
  padding-right: 80px;
`

const Wrap = styled.div`
  border-radius: 4px;
  input {
    width: 96%;
    min-height:40px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
  `

const SubmitButton = styled.button`
  color: #fff;
  background-color: #0000FF;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #0000FF;
  width:100%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`