import React from 'react'
import { Link } from 'react-router-dom'

const BillCard = (props) => {

    return (
        <div>
            <h2>Company: {props.attributes.company_name}</h2>
            <div>
                <Link to={`/bills/${props.attributes.slug}`} >View Bill</Link>
            </div>
        </div>
    )

}

export default BillCard

