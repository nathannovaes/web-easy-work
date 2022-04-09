import React, { useState, useEffect }  from 'react';
import FormBootstrap from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../../services/CategoryService";
import { updateNotice } from "../../../services/NoticeService";


function Form () {
    let noticeLocalStorage = localStorage.getItem("notice");
    let notice = JSON.parse(noticeLocalStorage)[0];

    let navigate = useNavigate();

    const [name, setName] = useState(notice.name);
    const [category_id, setCategory] = useState("");
    const [categories, setCategories] = useState("");
    const [description, setDescription] = useState(notice.description);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateNotice(notice.id, name, description, category_id);
        navigate("/");
    }

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
        <FormBootstrap onSubmit={handleSubmit}>
            <FormBootstrap.Group className="mb-3">
                <FormBootstrap.Label>Nome</FormBootstrap.Label>
                <FormBootstrap.Control type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            </FormBootstrap.Group>
            <FormBootstrap.Group className="mb-3">
                <FormBootstrap.Label>Categoria</FormBootstrap.Label>
                <FormBootstrap.Select type="text" onChange={(event) => setCategory(event.target.value)} defaultValue={notice.category_id}>
                    <option>Selecione uma categoria...</option>
                    {
                    categories.map((category) => {
                        return <option key={category.id} value={category.id}>{category.name}</option> 
                    })
                }                    
                    
                </FormBootstrap.Select>

            </FormBootstrap.Group>
            <FormBootstrap.Group className="mb-3">
                <FormBootstrap.Label>Descrição</FormBootstrap.Label>
                <FormBootstrap.Control type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
            </FormBootstrap.Group>
            <Button variant="success" type="submit">
                Salvar
            </Button>
        </FormBootstrap>
    )
}

export default Form;