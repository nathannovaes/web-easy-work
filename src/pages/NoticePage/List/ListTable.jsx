import React, { useState } from 'react';
import { deleteNotice, getNotice } from "../../../services/NoticeService";
import { useNavigate } from "react-router-dom";

import {
    Table, 
    Form,
    FormControl
} from 'react-bootstrap';

function ListTable(props) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const dataFilter = (notice) => {
        if ( setSearchTerm == "") {
            return notice
        } 

        if (
            notice.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            notice.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            notice.category.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
            return notice
        }
    }


    let navigate = useNavigate();
    const editNotice = async (noticeId) => {

        const response = await getNotice(noticeId)
        localStorage.setItem("notice", JSON.stringify(response.data.response));
        localStorage.setItem("notice_id", noticeId);

        navigate("/notice/edit");
    }

    return (
        <>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form>
                        <FormControl
                        type="search"
                        placeholder="Pesquisar"
                        className="mb-3"
                        onChange={handleSearch}
                        />
                    </Form>
            </Form.Group>

            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Descrição</th>
                <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.noticeList.filter((notice) => {
                        return dataFilter(notice)
                    }).map((notice) => (
                    <tr key={ notice.id }>
                        <td>{ notice.id }</td>
                        <td>{ notice.name }</td>
                        <td>{ notice.category }</td>
                        <td>{ notice.description }</td>
                        <td>
                            <div className="d-flex justify-content-center">
                                <a onClick={() => deleteNotice(notice.id)} className="action-icon"> 
                                    <i className="mdi mdi-delete" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Deletar"></i>
                                </a>
                                <a onClick={() => editNotice(notice.id)} className="action-icon"> 
                                    <i className="mdi mdi-square-edit-outline" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Editar"></i>
                                </a>
                            </div>
                        </td>
                    </tr>
                    ))
                }
            </tbody>
            </Table>
        </>
    )
}

export default ListTable;