import React, { useState } from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar } from 'rsuite';
import { useHistory } from 'react-router-dom'
import './style.scss';

const Login = (props) =>{
    const { onClickButton = () => {} } = props;
    const [user, setUser] = useState();
    const history = useHistory();
    const navigateTo = () => history.push('/cadastro');
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
                <h3>Login</h3>
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
                        <Button appearance="ghost" onClick={navigateTo}>
                            Cadastrar
                        </Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
    );
};

export default Login;