import React, { useState } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar } from 'rsuite';
import './style.scss';
import { useHistory } from 'react-router-dom'


const Cadastro = (props) =>{
    const { onClickButton = () => {} } = props;
    const [user, setUser] = useState();
    const history = useHistory();
    const navigateTo = () => history.push('/');
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
                    <ControlLabel>Name</ControlLabel>
                    <FormControl name="name" />
                    <HelpBlock tooltip>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>UserName</ControlLabel>
                    <FormControl name="username" />
                    <HelpBlock tooltip>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl name="email" type="email" />
                    <HelpBlock tooltip>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Senha</ControlLabel>
                    <FormControl name="password" type="password" />
                    <HelpBlock tooltip>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ButtonToolbar>
                        <Button appearance="primary" onClick={sendInfo}>
                        Cadastrar
                        </Button>
                        <Button appearance="ghost" onClick={navigateTo}>
                        Cancelar
                        </Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
    );
};
export default Cadastro;