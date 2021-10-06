import React from 'react'
import styled from "styled-components"

const Footer = () => {
    return (         
        <Wrap>
            <NavWrapper>
                <LinkWrap>
                    <a href="https://github.com/sbigelo/bills-tracker">Front End Github</a>
                    <a href="https://github.com/sbigelo/bills-tracker-backend">Back End Github</a>
                </LinkWrap>
            </NavWrapper>
        </Wrap>
    )
}

export default Footer;

const LinkWrap = styled.div`
    
 a {
    float:left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
 a:hover:not(.active) {
    background-color: #111;
  }
  
  .active {
    background-color: #255cc2;
  }
  `

const NavWrapper = styled.div` 
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  `

const Wrap = styled.div`
  background-color: white;
  text-align:center;
  color: black;
  font-family: 'Helvetica, sans-serif';
`

