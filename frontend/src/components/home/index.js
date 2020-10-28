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
                    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in pulvinar metus, et volutpat elit. Sed pulvinar dolor in enim feugiat posuere. Cras ac quam eu quam aliquet auctor eget in odio. Vivamus ut justo sit amet orci hendrerit cursus dignissim scelerisque metus. Cras dapibus risus id erat porta, et aliquet eros finibus. Donec ut neque in sapien congue rhoncus. Ut rhoncus sit amet diam gravida sodales. Aliquam arcu ipsum, sodales sit amet lacus ut, consequat pharetra velit. Maecenas auctor semper tincidunt. Sed aliquam tellus eget quam sollicitudin, ut varius massa imperdiet. Nam a efficitur est, nec placerat turpis. Sed tincidunt vulputate mauris, eu hendrerit diam dictum at. Integer malesuada urna sed lacinia pellentesque. Morbi tristique mi in tortor sollicitudin, a maximus urna egestas.

Phasellus et ipsum luctus, rhoncus eros ut, porta nulla. Integer a dolor nec sem euismod mattis. Vivamus laoreet odio sit amet egestas tincidunt. Vestibulum id eros tempus, imperdiet ex vitae, auctor dolor. Mauris fermentum a neque vitae fringilla. Sed tristique mauris velit, eget interdum arcu vulputate eu. Fusce tempus fermentum lectus hendrerit molestie.

Praesent eget ornare metus. Quisque vel maximus libero. Vivamus tincidunt mi commodo venenatis tempus. Phasellus leo justo, dapibus a lectus laoreet, tristique posuere quam. Nunc ornare libero eget arcu iaculis eleifend. Proin ultricies, enim eu consequat volutpat, nunc magna dignissim dolor, sed mattis justo tellus sit amet enim. Praesent et libero quam. Proin fringilla, dolor sed vestibulum egestas, est nisl auctor quam, ut interdum arcu augue vitae lorem. Quisque quis est ac est luctus accumsan. Donec at risus nibh.

Nam suscipit finibus nulla. Suspendisse ut arcu commodo, semper ipsum ac, lacinia massa. Praesent leo ex, euismod laoreet velit ultricies, pharetra tincidunt velit. Sed aliquet tempus aliquet. Fusce libero eros, luctus sed consectetur non, luctus et quam. Etiam vel nunc non dolor feugiat efficitur. Nulla ultrices, est ac placerat finibus, orci metus blandit erat, luctus laoreet massa ante nec leo. Morbi aliquam, purus malesuada tempus vestibulum, ex augue elementum ante, ut porttitor mi lorem eu lectus. Fusce eget ultricies purus, ac tristique velit. Aliquam ultrices pulvinar nibh id malesuada. Etiam quis leo et augue luctus ullamcorper. Mauris vel luctus leo. Integer nec augue et lacus auctor efficitur.</label>
                </Col>
            </Row>
            <Row className="show-grid" id="buttonGroup">
                <Col xs={12}>
                    <ButtonToolbar>
                        <Button color="blue" onClick={navigateTo}>
                            <Icon icon="user" className="icon"></Icon>
                            <label>Já possuo Login!</label>
                        </Button>
                    </ButtonToolbar>
                </Col>
                <Col xs={12}>
                <ButtonToolbar>
                        <Button color="green" onClick={goToSignup}>
                            <Icon icon="save" className="icon"></Icon>
                            <label>Quero me cadastrar!</label>
                        </Button>
                    </ButtonToolbar>
                </Col>
            </Row>
        </Grid>
    );
};

export default Home;