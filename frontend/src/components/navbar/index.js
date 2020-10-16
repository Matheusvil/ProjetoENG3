import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Navbar, Nav } from 'rsuite';
import { NavLink } from 'react-router-dom'
import './style.scss';

const NavBarInstance = () => {
    return (
      <Navbar className="navbody" appearance="inverse">
        <Navbar.Header>
          <NavLink to="/">
            <h4 className="libra-brand">
              Detecção de Libra com Gestos
            </h4>
          </NavLink>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
          </Nav>
          <Nav pullRight>
            <Nav.Item>
              <NavLink to="/login">Login</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/cadastrar">Cadastrar</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  };
  
  export default NavBarInstance;
