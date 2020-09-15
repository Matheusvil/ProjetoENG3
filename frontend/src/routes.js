import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import login from './view/login';
import cadastro from './view/cadastro'


export class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={login}/>
                    <Route exact path='/cadastrar' component={cadastro}/>
                </Switch>
            </BrowserRouter>
        )
    }
};

export default Routes;