import React from 'react';
import {Button} from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BackgroundGiff2 from '../../assets/videos/Adventure6.gif'
import './footer.css'

const Button1 = styled(Button)`
    font-family: 'Lato', sans-serif;
    border-color: white;
    color: white;
    background-color: transparent;
    &:hover{
        color: black;
        background-color: white;
        transition: all 0.5s ease-out;
    }
`;

const Footer = () => {
    return(
        <>
            <div className="footer-background-container">
                <div className="gradient"/>
                <img src={BackgroundGiff2} alt="Background giff" className="backgroundVideo2"/>
            </div>
            <div className="container-fluid footer-container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="footer-title">There's no time to lose.</h1>
                    </div>
                    <div className="col-12 col-md-5 offset-md-2">
                        <h1 className="footer-subtitle">Start planning your next adventure today!</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5">
                        <h1 className="footer-about-title">Interested? Do you wanna know more?</h1>
                        <Link to="/aboutus"><Button1 className="footer-button" outline>ABOUT US</Button1></Link>
                    </div>
                </div>
            </div>
        </>
        
    );
}
export default Footer;