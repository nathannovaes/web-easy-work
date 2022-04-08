import React  from 'react';
import Form from './Form';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import FormTopbar from '../../../common/FormTopbar';

function New () {
    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <FormTopbar title="Criar Notícia"/>
                    <Form />
                </Col>
            </Row>
        </Container>
    )
}

export default New;