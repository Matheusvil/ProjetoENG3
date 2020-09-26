import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Navbar, Nav } from 'rsuite';
import './style.scss';

const NavBarInstance = () => {
    return (
      <Navbar className="navbody" appearance="inverse">
        <Navbar.Header>
          <h4 className="libra-brand">
            Detecção de Libra com Gestos
          </h4>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
          </Nav>
          <Nav pullRight>
            <Nav.Item>Login</Nav.Item>
            <Nav.Item>Cadastrar</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  };
  
  export default NavBarInstance;
