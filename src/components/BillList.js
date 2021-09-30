import React from 'react'
import BillCard from './BillCard'
import BillInput from '../components/BillInput'
import styled from "styled-components"

const BillList = ({ bills }) => {
    const card = bills.map(bill => 
        <BillCard key={bill.id} attributes={bill}/>
        )

        return (
            <Wrap>
                <div>{card}</div>
                <BillInput />
            </Wrap>
        )

    }
export default BillList

const Wrap = styled.div`
  margin-left: auto;
  margin-right: auto;
`