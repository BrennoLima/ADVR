import React, { useState } from 'react'
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
            <BlackNavbar dark expand="md">
                <NavbarBrand className="navbar-brand">ADVR<i className="fas fa-mountain ml-2"/></NavbarBrand>
                <NavbarToggler onClick={toggle} className="toggler"/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <a className="nav-link" href="/">Home</a>
                        </NavItem>
                        <NavItem>
                            <a className="nav-link" href="#adventures">Adventures</a>
                        </NavItem>
                        <NavItem>
                            <a className="nav-link" href="#trips">Trips</a>
                        </NavItem>
                        <NavItem>
                            <a className="nav-link" href="/signin">Sign-in</a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </BlackNavbar>
        </div>
    );
}

export default Header;