import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavItem, Nav, NavbarToggler, Collapse, Button,
        Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './header.css';
import styled from 'styled-components'
import OnOutsiceClick from 'react-outclick';
import ErrorMessage from './ErrorMessage'

const BlackNavbar = styled(Navbar)`
    background-color: black;
`;
const ButtonSignIn = styled(Button)`
    color: grey;
    background-color: transparent;
    border: none;
    text-align: center;
    &:hover{
        background-color: transparent;
        color: lightgrey;
    }
`;
const ButtonSignInModal = styled(Button)`
    width: 8rem;
`


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const closeCollapse = () => setIsOpen(isOpen ? !isOpen : null);

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const history = useHistory();
    
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        toggleModal();
        history.push('/profile')
    }

    return(
        <div className="container-fluid navbar-container" id="navbar-container">
            <OnOutsiceClick onOutsideClick={closeCollapse}>
            <BlackNavbar dark expand="md">
                <NavbarBrand className="navbar-brand" id="brand" href="/">ADVR<i className="fas fa-mountain ml-2"/></NavbarBrand>
                    <NavbarToggler onClick={toggle} className="toggler"/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/" id="home">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/adventures" id="adventures">Adventures</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/trips" id="trips">Trips</Link>
                            </NavItem>
                            <NavItem>
                                <ButtonSignIn  onClick={toggleModal} id="signin">Sign-in</ButtonSignIn>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </BlackNavbar>
                <Modal isOpen={modal} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Sign in</ModalHeader>
                    <ModalBody>
                        <form className="container" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row justify-content-left m-1">
                                    <label className="col-12 col-md-3 form-label-header">Email</label>
                                    <input type="text" name="email" id="email" 
                                        placeholder="crazy@adventure.com" className="col-12 col-md-7 signinput-header"
                                        ref={register({required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/})}/>
                                </div>
                                <div className="row justify-content-center">
                                    <div id='EmailError'><ErrorMessage error={errors.email} className="col-12" /></div>
                                </div>
                                <div className="row justify-content-left m-1">
                                    <label className="col-12 col-md-3 form-label-header">Password</label>
                                    <input type="password" name="password" id="password" className="col-12 col-md-7 signinput-header"
                                        ref={register({required: true, pattern: /^admin$/})}/>
                                </div>
                                <div className="row justify-content-center">
                                    <div id='PassError'><ErrorMessage  error={errors.password} className="col-12"/></div>
                                </div>
                                <div className="row justify-content-center mt-3">
                                    <ButtonSignInModal className="col-3 col-md-3" outline id="signinmodal"
                                        color="primary" type="submit">Sign in</ButtonSignInModal>
                                    
                                    <Button className="col-3 col-md-3 offset-1" id="cancelmodal"
                                        outline color="secondary" onClick={toggleModal}>Cancel</Button>
                                </div>
                        </form>      
                    </ModalBody>
                    <ModalFooter className="justify-content-center">
                        <p>New to ADVR? <Link to="/signin" id="newsignin" className="joinnowbtn" onClick={toggleModal}>Join now!</Link></p>
                    </ModalFooter>
                </Modal>
            </OnOutsiceClick>
        </div>
    );
}

export default Header;