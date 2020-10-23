import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import MapPage from '../MapPage/MapPage';
import Uploader from '../Uploader/Uploader';
import About from '../About/About';
import Location from '../Location/Location';

function Router (props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => <LandingPage/> }/>
                <Route exact path="/locations" render={() => <MapPage state={props.state} /> }/>
                <Route path="/about" render={() => <About /> }/>
                <Route path="/upload" render={() => <Uploader addLocation={props.addLocation} onChange={props.onChange} newLocation={props.state.newLocation}/> }/>
                <Route path="/locations/:id" render={(props) => <Location {...props}/> } />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;