import React, { useState, useEffect }  from 'react';
import FormBootstrap from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { updateCategory } from "../../../services/CategoryService";

function Form () {
    let categoryLocalStorage = localStorage.getItem("category");
    let category = JSON.parse(categoryLocalStorage);

    let navigate = useNavigate();

    const [name, setName] = useState(category.name);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateCategory(category.id, name);
        navigate("/categories");
    }

    return (
        <FormBootstrap onSubmit={handleSubmit}>
            <FormBootstrap.Group className="mb-3" controlId="formBasicEmail">
                <FormBootstrap.Label>Nome</FormBootstrap.Label>
                <FormBootstrap.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </FormBootstrap.Group>

            <Button variant="success" type="submit">
                Salvar
            </Button>
        </FormBootstrap>
    )
}

export default Form;