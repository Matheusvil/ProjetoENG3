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
import { Link } from 'react-router-dom'

const cadastro = () =>{
    return (
        <div className="body">
            <Form>
                <FormGroup>
                    <ControlLabel>Nome</ControlLabel>
                    <FormControl name="name" />
                    <HelpBlock tooltip>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Sobrenome</ControlLabel>
                    <FormControl name="name" />
                    <HelpBlock tooltip>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Data de nascimento</ControlLabel>
                    <FormControl name="data" type="date"/>
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
                    <ControlLabel>Verifique a senha</ControlLabel>
                    <FormControl name="password" type="password" />
                    <HelpBlock tooltip>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ButtonToolbar>
                        <Button appearance="primary">
                        Cadastrar
                        </Button>
                        <Button appearance="primary">
                        <Link to="/">Cancelar</Link>
                        </Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
    );
};
export default cadastro;