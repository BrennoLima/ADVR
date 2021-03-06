import React from 'react';
import BackgroundGiff from '../../assets/videos/Adventure10.gif'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import './hero.css'

const Button1 = styled(Button)`
    font-family: 'Lato', sans-serif;
    border-color: white;
    color: white;
    width: 13rem;
    height: 3rem;
    margin-top: 5rem;
    &:hover{
        color: black;
        background-color: white;
        transition: all 0.5s ease-out;
    }
`;
const Button2 = styled(Button1)`
    margin-top: 1rem;
`;

const Hero = () => {
    return(
        <>  
            <div className="hero-gradient"/>
            <div className="background-container">
                <img src={BackgroundGiff} alt="Background giff" className="backgroundVideo"/>
            </div>
            <div className="hero-gradient2"/>
            <div className="container-fluid hero-container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="hero-title">Adventure Awaits</h1>
                    </div>
                    <div className="col-12">
                        <h2 className="hero-subtitle">what are you waiting for?</h2>
                    </div>

                    <div className="col-12">
                        <Link to="/signin"><Button1 id="getstarted" outline>GET STARTED</Button1></Link>
                    </div>
                    <div className="col-12">
                        <Link to='/trailer'><Button2 id="trailer" outline>WATCH TRAILER  <i className="far fa-play-circle fa-lg"/></Button2></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;