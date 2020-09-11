import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './Header/HeaderComponent'
import Hero from './Hero/HeroComponent'

const Main = () => {
    return(
        <>
            <Header/>
            <Hero/>
            <Hero/>
            <Switch>
                <Route exact path='/'/>
            </Switch>
        </>
    );
}

export default Main;