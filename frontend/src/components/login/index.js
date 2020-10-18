import React, { useState } from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar } from 'rsuite';
import { NavLink } from 'react-router-dom'
import './style.scss';

const Login = (props) =>{
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
                        <Button appearance="primary" onClick={sendInfo}>
                            Entre
                        </Button>
                        <Button appearance="ghost">
                        <NavLink to="/cadastrar">Cadastrar</NavLink>
                        </Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
    );
};

export default Login;