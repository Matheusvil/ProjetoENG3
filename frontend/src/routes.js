import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import login from './view/login';


export class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={login}/>
                </Switch>
            </BrowserRouter>
        )
    }
};

export default Routes;