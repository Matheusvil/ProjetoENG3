import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Sidenav, Nav } from 'rsuite';
import './style.scss';

const SideBarinstance = () => {
  return (
    <div className="sidenav">
      <Sidenav appearance="inverse" activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1">
              Home
            </Nav.Item>
            <Nav.Item eventKey="2">
              Detecção de Gesto
            </Nav.Item>
            <Nav.Item eventKey="3">
                Logout
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

  export default SideBarinstance;