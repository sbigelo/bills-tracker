import { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/addUser'
import styled from "styled-components"


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
        console.log('a')
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addUser(this.state, this.props.bill.id)
        this.setState({
            first_name: '',
            last_name: ''
        })
        console.log('a')
    }


    render() {
        return(
            <div>
                <UserWrapper>
                <form onSubmit={this.handleOnSubmit}>
                <Wrap>
                <input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.handleOnChange}/>
                </Wrap>
                <Wrap>
                <input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.handleOnChange}/>
                </Wrap>
                
                <SubmitButton type="submit">Add</SubmitButton>
                </form>
                </UserWrapper>
            </div>
        )
    }

}
export default connect(null, { addUser })(UserInput)

const UserWrapper = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size:20px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  margin: 20px 0;
  padding:20px;
  background: #fff;
  
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
  
  textarea {
    width: 100%;
    min-height:80px;
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
  width:102%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`