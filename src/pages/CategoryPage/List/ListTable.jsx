import React, { useState } from 'react';
import { deleteCategory, getCategory } from "../../../services/CategoryService";
import { useNavigate } from "react-router-dom";

import Table from 'react-bootstrap/Table';

function ListTable(props) {

    let navigate = useNavigate();
    const editCategory = async (categoryId) => {

        const response = await getCategory(categoryId)
        localStorage.setItem("category", JSON.stringify(response.data.response));
        localStorage.setItem("category_id", categoryId);

        navigate("/category/edit");
    }

    return (
        <>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.categoryList.map((category) => (
                    <tr key={ category.id }>
                        <td>{ category.id }</td>
                        <td>{ category.name }</td>
                        <td>
                            <div className="d-flex justify-content-center">
                                <a onClick={() => deleteCategory(category.id)} className="action-icon"> 
                                    <i className="mdi mdi-delete" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Deletar"></i>
                                </a>
                                <a onClick={() => editCategory(category.id)} className="action-icon"> 
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