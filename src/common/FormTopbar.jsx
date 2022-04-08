import {
    Container,
    Nav,
    Navbar,
    Button
} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function FormTopbar(props) {

    let navigate = useNavigate();

    const back = (event) => {
        event.preventDefault();

        navigate("/");
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>{ props.title }</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link onClick={back}>
                            <i className="mdi mdi-arrow-left"></i> 
                            Voltar
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default FormTopbar;