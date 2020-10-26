import React, { useContext } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import { AuthContext } from './context/auth';
import login from './view/login';
import cadastro from './view/cadastro'
import home from './view/home'
import alfabeto from './view/alfabeto'


const Routes = () => {
    const [auth] = useContext(AuthContext);
  
    const isAdmin = () => {
      console.log(auth);
      return auth && auth.user.role;
    };
  
    const isLogin = () => {
      return auth;
    };
  
    const PrivateRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={(props) =>
            isLogin() ? <Component {...props} /> : <Redirect to="/login" />
          }
        />
      );
    };
  
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/alfabeto" exact component={alfabeto} />
          <Route path="/" exact component={home} />
          <Route path="/login" exact component={login} />
          <Route path="/cadastro" exact component={cadastro} />
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;
  