import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar } from 'rsuite';
import { Link } from 'react-router-dom'
import './style.scss';

const login = () =>{
    return (
        <div className="body">
            <Form>
                <h2>Login</h2>
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
                            Entre
                        </Button>
                        <Button appearance="ghost">
                        <Link to="/cadastrar">Cadastrar</Link>
                        </Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
    );
};
export default login;