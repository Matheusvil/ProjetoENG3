import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import login from './view/login';
import cadastro from './view/cadastro'
import home from './view/home'

export class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={home}/>
                    <Route exact path='/cadastrar' component={cadastro}/>
                    <Route exact path='/login' component={login}/>
                </Switch>
            </BrowserRouter>
        )
    }
};

export default Routes;