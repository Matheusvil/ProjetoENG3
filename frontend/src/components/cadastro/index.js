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
import './style.scss';
import { NavLink } from 'react-router-dom'

const cadastro = () =>{
    return (
        <div className="body">
            <Form>
                <FormGroup>
                    <ControlLabel>UserName</ControlLabel>
                    <FormControl name="name" />
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
                        <Button appearance="primary">
                        Cadastrar
                        </Button>
                        <Button appearance="ghost">
                        <NavLink to="/">Cancelar</NavLink>
                        </Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
    );
};
export default cadastro;