import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="footer py-3 bg-dark">
            <Navbar id="footer-navbar" bg="Dark" variant="dark" expand="lg">
                <Container id="footer-container">
                    <Nav id="footer-nav">
                        <Nav.Link id="footer-nav-link" href="#facebook"><i className="bi bi-facebook"></i></Nav.Link>
                        <Nav.Link id="footer-nav-link" href="#instagram"><i className="bi bi-instagram"></i></Nav.Link>
                        <Nav.Link id="footer-nav-link" href="#twitter"><i className="bi bi-twitter"></i></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </footer>

    )
}

export default Footer