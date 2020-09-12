import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './Header/HeaderComponent'
import Hero from './Hero/HeroComponent'
import Adventures from './Adventures/AdventuresComponent'
import Trips from './Trips/TripsComponent'
const Main = () => {
    return(
        <>
            <Header/>
            <Hero/>
            <Adventures/>
            <Trips/>
            
        </>
    );
}

export default Main;