import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <footer >
            <Navbar id="footer-navbar" bg="Dark" variant="dark" expand="lg">
                <Container id="footer-container">
                    <Nav id="footer-nav">
                        <Nav.Link id="footer-nav-link" href="#facebook"><i class="bi bi-facebook"></i></Nav.Link>
                        <Nav.Link id="footer-nav-link" href="#instagram"><i class="bi bi-instagram"></i></Nav.Link>
                        <Nav.Link id="footer-nav-link" href="#twitter"><i class="bi bi-twitter"></i></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </footer>

    )
}

export default Footer