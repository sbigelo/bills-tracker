import React from 'react'
import BillCard from './BillCard'
import BillInput from '../components/BillInput'

const BillList = ({ bills }) => {
    const card = bills.map(bill => 
        <BillCard key={bill.id} attributes={bill}/>
        )

        return (
            <div>
                {card}
                <BillInput />
            </div>
        )

    }
export default BillList