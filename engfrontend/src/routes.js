import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './view/login';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;