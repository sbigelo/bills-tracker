import React from 'react'
import BillCard from './BillCard'
import BillInput from '../components/BillInput'
import styled from "styled-components"

const BillList = ({ bills }) => {
    const card = bills.map(bill => {
        return <BillCard key={bill.id} attributes={bill} />
    }) 
    const total =  bills.reduce((a, b) => a + parseInt(b.amount_due), 0)

        return (
            <Wrap>
                <Header>Current total for all bills: ${total}.00</Header>
                <div>{card}</div>
                <BillInput />
            </Wrap>
        )

    }
export default BillList

const Header = styled.div`
text-align: center;
font-size: 35px;
font-weight: bold;
`

const Wrap = styled.div`
  margin-left: auto;
  margin-right: auto;
`