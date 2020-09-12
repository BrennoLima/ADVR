import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './Header/HeaderComponent'
import Hero from './Hero/HeroComponent'
import Trips from './Trips/TripsComponent'

const Main = () => {
    return(
        <>
            <Header/>
            <Hero/>
            <Trips/>
            <Switch>
                <Route exact path='/'/>
            </Switch>
        </>
    );
}

export default Main;