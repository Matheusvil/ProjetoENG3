import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Grid, Row, Col } from 'rsuite';
import { Button, ButtonToolbar, Icon} from 'rsuite';
import { useHistory } from 'react-router-dom'
import './style.scss';

const Home = () =>{
    const history = useHistory();
    const navigateTo = () => history.push('/login');
    const goToSignup = () => history.push('/cadastro')
    return(
        <Grid fluid>
            <Row className="show-grid">
                <Col xs={24} className="title">
                    <h1>Quem Somos?</h1>
                </Col>
            </Row>
            <Row className="show-grid">
                <Col xs={24} className="text">
                    <label>Trabalho dedicato à matéria de Engenharia de Software 3 da faculdade FATEC são josé dos campos.</label>
                    <br/>
                    <label>Projeto de reconhecimento de gestos à partir das libras, com intuito de uma pessoa leiga aprender a se comunicar com gestos básicos em libras.</label>
                    <br/>
                    <label>Alunos envolvidos:</label>
                    <br/>
                    <label>- Bruno Henrique</label>
                    <br/>
                    <label>- Gabriel Matos</label>
                    <br/>
                    <label>- Matheus Vilela</label>
                </Col>
            </Row>
            <div style={{display: "flex", justifyContent: "space-around"}}>
            <ButtonToolbar>
                        <Button color="blue" onClick={navigateTo}>
                            <Icon icon="user" className="icon"></Icon>
                            <label>Já possuo Login!</label>
                        </Button>
                    </ButtonToolbar>
                    <ButtonToolbar>
                        <Button color="green" onClick={goToSignup}>
                            <Icon icon="save" className="icon"></Icon>
                            <label>Quero me cadastrar!</label>
                        </Button>
                    </ButtonToolbar>
            </div>
        </Grid>
    );
};

export default Home;