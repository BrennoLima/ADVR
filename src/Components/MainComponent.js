import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './Header/HeaderComponent'

const Main = () => {
    return(
        <>
            <Header/>
            <Switch>
                <Route exact path='/'/>
            </Switch>
        </>
    );
}

export default Main;