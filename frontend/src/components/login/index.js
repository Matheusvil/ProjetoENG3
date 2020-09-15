import React from 'react';
import {
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    HelpBlock,
    ButtonToolbar,
    Button,
  } from 'rsuite';
import { Link } from 'react-router-dom'
import './style.scss';

const login = () =>{
    return (
        <div className="body">
            <Form>
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
                        <Button appearance="primary">
                        Entrar
                        </Button>
                    </ButtonToolbar>
                </FormGroup>
                <FormGroup>
                    <ButtonToolbar>
                        <Button appearance="primary">
                        <Link to="/cadastrar">Cadastrar</Link>
                        </Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
    );
};
export default login;