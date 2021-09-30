import React from 'react'
import UsersContainer from '../containers/UsersContainer'
import UserList from './UserList'
import BillEdit from './BillEdit'
import styled from "styled-components"

const Bills = (props) => {
    let bill = props.bills.filter(bill => bill.slug === props.match.params.slug)[0]
    return (
        <Wrap>
            <Column>
                <Main>
                    <h2>Company Name: {bill && bill.company_name}</h2>
                    <p>Due date: {bill && bill.due_date}</p>
                    <p>Amount Due: {bill && bill.amount_due}</p>
                    <p>Paid Status: {bill && bill.paid_status}</p>
                    <p>Notes: {bill && bill.notes}</p>
                    <UserList users={bill && bill.users}/>
                    {bill && <BillEdit bill={bill} /> }
                </Main>
            </Column>
        <Column>
            <UsersContainer bill={bill} />
        </Column >
        </Wrap>
    )

}

export default Bills

const Wrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  `

const Main = styled.div`
  padding-left: 60px;
`

const Column = styled.div`
  background: #fff; 
  max-width: 50%;
  width: 50%;
  float: left; 
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    background: white;
    border-top: 1px solid rgba(255,255,255,0.5);
  }
`