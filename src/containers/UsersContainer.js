import React from 'react'
import UserInput from '../components/UserInput'
import styled from "styled-components"

const UsersContainer = props => {
    return (
       <UserWrapper>
           <UserHeadline>Add a bill paying member of your household to this bill:</UserHeadline>
           <UserInput bill={props.bill}
                      billId={props.bill && props.bill.id}
           />
       </UserWrapper>
    )
}

export default UsersContainer

const UserWrapper = styled.div`
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

const UserHeadline = styled.div`
  text-align: center;
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
  color: black;
`