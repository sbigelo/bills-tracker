import React from 'react'


const Bills = (props) => {
    
    return (
        <div>
            <h1>Bill {props.bill.id}:</h1>
            <p>Company: {props.bill.company_name}</p>
            <p>Due Date: {props.bill.due_date}</p>
            <p>Amount Due: {props.bill.amount_due}</p>
            <p>Paid Status: {props.bill.paid_status}</p>
            <p>Notes: {props.bill.notes}</p>
        </div>
    )
}

export default Bills
