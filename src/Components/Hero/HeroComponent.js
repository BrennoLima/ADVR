import React from 'react';
import BackgroundVideo from '../../assets/videos/Adventure4.mp4'
import {Button} from 'reactstrap'
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
const Button2 = styled(Button)`
    font-family: 'Lato', sans-serif;
    border-color: white;
    color: white;
    margin-top: 1rem;
    &:hover{
        color: black;
        background-color: white;
        transition: all 0.5s ease-out;
    }
`;

const Hero = () => {
    return(
        <div className="container-fluid hero-container">
            <video src={BackgroundVideo} autoPlay loop muted/>
            <div className="row">
                <div className="col-12">
                    <h1 className="hero-title">Adventure Awaits</h1>
                </div>
                <div className="col-12">
                    <h2 className="hero-subtitle">what are you waiting for?</h2>
                </div>
            </div>
            <div className="row mobile">
                <div className="col-12">
                    <Button1 outline className="btn-1">GET STARTED</Button1>
                </div>
                <div className="col-12">
                    <Button2 outline className="btn-2">WATCH TRAILER  <i className="far fa-play-circle fa-lg"/></Button2>
                </div>
            </div>
        </div>
    );
}

export default Hero;