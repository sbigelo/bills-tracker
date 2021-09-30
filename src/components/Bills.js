import React from 'react'
import UsersContainer from '../containers/UsersContainer'
import UserList from './UserList'
import BillEdit from './BillEdit'

const Bills = (props) => {
    let bill = props.bills.filter(bill => bill.slug === props.match.params.slug)[0]
    return (
        <div>
        <h2>Company Name: {bill && bill.company_name}</h2>
        <p>Due date: {bill && bill.due_date}</p>
        <p>Amount Due: {bill && bill.amount_due}</p>
        <p>Paid Status: {bill && bill.paid_status}</p>
        <p>Notes: {bill && bill.notes}</p>
        <UserList users={bill && bill.users}/>
        <BillEdit bill={bill}/>
        <UsersContainer bill={bill} />
        </div>
    )

}

export default Bills