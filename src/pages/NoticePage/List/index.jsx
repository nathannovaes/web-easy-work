import React, { useState, useEffect } from 'react';

import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Navbar from '../../../common/Navbar';
import ListTable from './ListTable';

import { getNotices } from "../../../services/NoticeService";


function List() {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getNotices();
            setNotices(response.data.response);
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
                    <Navbar />
                    <ListTable noticeList={notices}/>
                </Col>
            </Row>
        </Container>
    );
}


export default List;