import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import  {Link} from "react-router-dom"

const NavBar = () => {
    const listStyle = {
        color:"white", 
        textDecoration:"none"
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" style={{color:"coral"}}>API WS</Navbar.Brand>
            <Nav className="mr-auto" style={{width:"100px", display:'flex', justifyContent:"space-around"}}>
                <Link to="/" style={listStyle}>Home</Link>
                <Link to="/about" style={listStyle}>About</Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar
