import React from 'react';
import './App.css';
import NtfLandingPage from './container/NtfLandingPage';
import {Switch, Route, Link } from 'react-router-dom';
import NetflixHomePage from './components/firstSection/NetflixHomePage/NetflixHomePage';


function App(props) {
  return (
    <div className="App">
      <NtfLandingPage />
      <Switch>
        <Route path="/" exact component={NtfLandingPage} />
        <Route path='/netflixhomepage' component={NetflixHomePage} />
      </Switch>

    </div>

  );
}

export default App;
