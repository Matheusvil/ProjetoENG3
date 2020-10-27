import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Navbar, Nav, Button } from 'rsuite';
import { useHistory } from 'react-router-dom'
import './style.scss';

const NavBarInstance = () => {
  const history = useHistory();
  const navigateTo = () => history.push('/alfabeto');
  const goTo = () => history.push('/')
  return (
    <Navbar className="navbody" appearance="inverse">
      <Navbar.Header>
        <h4 className="libra-brand">
            Detecção de Libra com Gestos
        </h4>
      </Navbar.Header>
      <Navbar.Body>
        <Nav pullRight>
          <Button appearance="primary" onClick={navigateTo} className="btn-nav">Alfabeto em Libras</Button>
          <Button appearance="primary" onClick={goTo} className="btn-nav">Reconhecimento de gestos</Button>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};
  
  export default NavBarInstance;
