import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  ButtonToolbar,
  Button,
} from 'rsuite';
import './style.scss';

const Login = (props) => {
  const { onClickButton = () => {} } = props;
  const [user, setUser] = useState();

  function getForm(value) {
    setUser(value);
  }

  function sendInfo() {
    onClickButton(user);
  }

  return (
    <div className="body">
      <Form
        onChange={(e) => {
          getForm(e);
        }}
      >
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl name="email" type="email" />
          <HelpBlock tooltip>Required</HelpBlock>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl name="password" type="password" />
          <HelpBlock tooltip>Required</HelpBlock>
        </FormGroup>
        <FormGroup>
          <ButtonToolbar>
            <Button appearance="primary" onClick={sendInfo}>
              Entrar
            </Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </div>
  );
};
export default Login;
