import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const NavBar = () => {
    return (
        <Wrapper>
            <NavWrapper>
            <Navbar>
                <Nav>
                    <LinkWrap>
                    <Link to='/'>Home</Link>
                    <Link to='/bills'>Current Bills</Link>
                    </LinkWrap>
                </Nav>
            </Navbar>
            </NavWrapper>
        </Wrapper>
    )
}

export default NavBar

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

const Wrapper = styled.div`
  background-color: white;
  text-align:center;
  color: black;
  font-family: 'Helvetica, sans-serif';
`

