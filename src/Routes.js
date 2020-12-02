import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import App from './App';
import NetflixHomePage from './components/firstSection/NetflixHomePage/NetflixHomePage';
import NtfLandingPage from './container/NtfLandingPage';

export default () => (
        <Switch> 
            <Route exact path="/" component={NtfLandingPage} />
            <Route path="/netflixhomepage" component={NetflixHomePage} />
        </Switch>
)