import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './Header/HeaderComponent'
import Hero from './Hero/HeroComponent'
import Adventures from './Adventures/AdventuresComponent'
import Trips from './Trips/TripsComponent'
import Footer from './Footer/FooterComponent'
import Promo from './Promo/PromoComponent'
const Main = () => {
    return(
        <>
            <Header/>
            <Hero/>
            <Adventures/>
            <Trips/>
            <Promo/>
            <Footer/>
        </>
    );
}

export default Main;