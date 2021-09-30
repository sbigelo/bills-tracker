import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const BillCard = (props) => {

    return (
        <Card>
            <TitleWrap>
                Company: {props.attributes.company_name}
            </TitleWrap>
            <LinkWrapper>
                <Link to={`/bills/${props.attributes.slug}`} >View Bill</Link>
            </LinkWrapper>
        </Card>
    )

}

export default BillCard

const LinkWrapper = styled.div`
  margin: 20px 0 20px 4;
  height: 60px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
      color: #fff;
      background: #000;
      border-radius: 4px;
      padding: 10px 40px;
      border: 1px solid #000;
      width: 7%;
      text-decoration: none;
      display: flex;
      align-items: center;
      text-align: center;
      flex-direction: column
  }
`


const TitleWrap = styled.div`
    padding: 10px 0 10px 0
`

const Card = styled.div`
  border: 3px solid #efefef;
  background: #fff;
  text-align: center
`