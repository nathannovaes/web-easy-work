import React, { useState } from 'react';

import {
    Container,
    Nav,
    Button
} from 'react-bootstrap';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

function Navbar() {
    let navigate = useNavigate();

    const newNotice = (event) => {
        event.preventDefault();

        navigate("/notice/new");
    }

    const newCategory = (event) => {
        event.preventDefault();

        navigate("/category/new");
    }

    return (
        <NavbarBootstrap bg="light" expand="lg">
            <Container>
                <NavbarBootstrap.Brand>Notícias</NavbarBootstrap.Brand>
                <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBootstrap.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link onClick={newNotice}>
                            <i className="mdi mdi-plus"></i> 
                            Notícia
                        </Nav.Link>
                        <Nav.Link onClick={newCategory}>
                            <i className="mdi mdi-plus"></i> 
                            Categoria
                        </Nav.Link>
                    </Nav>
                </NavbarBootstrap.Collapse>
            </Container>
        </NavbarBootstrap>
    )
}

export default Navbar;