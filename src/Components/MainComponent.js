import React from 'react';
import Header from './Header/HeaderComponent'
import Hero from './Hero/HeroComponent'
import Adventures from './Adventures/AdventuresComponent'
import Trips from './Trips/TripsComponent'
import Footer from './Footer/FooterComponent'
import Signin from './SignIn/SignInComponent'
import About from './About/AboutComponent'
import Profile from './Profile/ProfileComponent'
import AdventureDetail from './Adventures/AdventureDetailComponent'
import TripDetail from './Trips/TripDetailComponent'
import { Switch, Route, Redirect } from 'react-router-dom'        

const Main = () => {

    return(
        <>
            <Header/>
                <Switch>
                    <Route path='/home' component = {() => <Hero/>}/>
                    <Route exact path='/adventures' component ={() => <Adventures/>}/>
                    <Route path='/adventures/:Id' component={() => <AdventureDetail/>}/>
                    <Route exact path='/trips' component ={() => <Trips/>}/>
                    <Route path='/trips/:Id' component={() => <TripDetail/>}/>
                    <Route exact path='/signin' component={() => <Signin/>}/>
                    <Route exact path='/aboutus' component={() => <About/>}/>
                    <Route exact path='/profile' component={() => <Profile/>}/>
                    <Redirect to="/home"/>
                </Switch>
            <Footer/>
        </>
    );
    
}

export default Main;