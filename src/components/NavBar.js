import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div>
            <Navbar>
                <Nav>
                    <Link to='/'>Home</Link>
                    <br></br>
                    <Link to='/bills'>Current Bills</Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar