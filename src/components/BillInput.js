import { Component } from 'react'
import { connect } from 'react-redux'
import { addBill } from '../actions/addBill'
import styled from "styled-components"

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
            
              
                <BillWrap className="form-container">
                <BillHeader>Create A New Bill</BillHeader>
                    <form onSubmit={this.handleOnSubmit}>
                <FormWrap>    
                            <input type="text" placeholder="Company Name" value={this.state.company_name} name="company_name" onChange={this.handleOnChange} />
                </FormWrap>
                <FormWrap>
                            <input type="text" placeholder="Due Date" value={this.state.due_date} name="due_date" onChange={this.handleOnChange} />
                </FormWrap>
                <FormWrap>
                            <input type="text" placeholder="Amount Due" value={this.state.amount_due} name="amount_due" onChange={this.handleOnChange} />
                </FormWrap>
                <FormWrap>    
                            <input type="text" placeholder="Paid Status" value={this.state.paid_status} name="paid_status" onChange={this.handleOnChange} />
                </FormWrap>
                <FormWrap>     
                            <input type="text" placeholder="Notes" value={this.state.notes} name="notes" onChange={this.handleOnChange} />
                </FormWrap>      

                        <BillButton type="submit">Create New Bill</BillButton>
            
                    </form>
                </BillWrap>
            
        )
    }
}

export default connect(null, { addBill })(BillInput)

const BillHeader = styled.div`
  text-align: center;
  font-size:30px;
  padding: 15px 0;
  font-weight: bold;
  color: black;
`

const BillButton = styled.button`
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

const BillWrap = styled.div`
  background:white;
  padding:20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom:80px;
  border: 1px solid rgba(0,0,0,0.1);
  height: 100vh;
  padding-top: 100px;
  background: #f6f1f0;
  padding-right: 80px;
`

const FormWrap = styled.div`
  border-radius: 4px;
  input {
    width: 96%;
    min-height:40px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
  
  textarea {
    width: 100%;
    min-height:80px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }
`