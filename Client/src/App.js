import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Compoennts/Home/Home';
import MapPage from './Compoennts/MapPage/MapPage';
import LandingPage from './Compoennts/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <LandingPage/> }/>
        <Route path="/locations" render={() => <MapPage /> }/>
        <Route />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
