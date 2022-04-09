import React, { useState, useEffect } from 'react';

import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Navbar from '../../../common/Navbar';
import ListTable from './ListTable';

import { getCategories } from "../../../services/CategoryService";


function List() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getCategories();
            setCategories(response.data.response);
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return 'Carregando ...';
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <Navbar title="Categorias"/>
                    <ListTable categoryList={categories}/>
                </Col>
            </Row>
        </Container>
    );
}


export default List;