import React from 'react';
import './App.css';
import NtfLandingPage from './container/LandingPage/NtfLandingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NetflixHomePage from './container/NetflixHomePage/NetflixHomePage';
import SignIn from './components/NetflixLandingPage/firstSection/SignIn/SignIn';

function App(props) {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/" exact component={NtfLandingPage} />
        <Route path='/netflixhomepage' component={NetflixHomePage} />
        <Route path='/signin' component={SignIn} />
      </Switch>
      </Router>
      
    </div>

  );
}

export default App;
