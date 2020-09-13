import React from 'react';
import Header from './Header/HeaderComponent'
import Hero from './Hero/HeroComponent'
import Adventures from './Adventures/AdventuresComponent'
import Trips from './Trips/TripsComponent'
import Footer from './Footer/FooterComponent'

const Main = () => {
    return(
        <>
            <Header/>
            <Hero/>
            <Adventures/>
            <Trips/>
            <Footer/>
        </>
    );
}

export default Main;