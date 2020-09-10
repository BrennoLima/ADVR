import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { Navbar, NavbarBrand, NavItem, Nav, NavbarToggler, Collapse} from 'reactstrap';
import './header.css';
import styled from 'styled-components'

const BlackNavbar = styled(Navbar)`
    background-color: black;
`;

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div className="container-fluid navbar-container">
            <BlackNavbar dark expand="md" fixed="top">
                <NavbarBrand className="navbar-brand">ADVR <i className="fas fa-mountain ml-2"/></NavbarBrand>
                <NavbarToggler onClick={toggle} className="toggler"/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/services">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/signin">Sign-in</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </BlackNavbar>
        </div>
    );
}

export default Header;