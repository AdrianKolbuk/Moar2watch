import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, FormControl, Form, Button, InputGroup, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Container id="header" fluid>
            <Row>
                <Navbar id="navbar" bg="Dark" variant="dark" expand="lg">

                    <Col xs={12} lg={2} className="d-flex justify-content-center">
                        <Navbar.Brand href="/home">
                            <img
                                alt=""
                                src="/img/logo_m2w.png"
                                width="70"
                                height="70"
                                className="d-inline-block align-middle"
                            />{' '}
                            Moar2watch
                        </Navbar.Brand>
                    </Col>

                    <Col xs={12} lg={8} className="d-flex justify-content-center">
                        <InputGroup className="" >
                            <DropdownButton
                                variant="outline-secondary"
                                title="Dropdown"
                                id="input-group-dropdown-1"
                            >
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                            <FormControl
                                placeholder="Search for films and series.."
                                // value={props.value}
                                // onChange={() => }
                                aria-label="Text input with dropdown button"
                            />
                        </InputGroup>
                    </Col>

                    {/* <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text> */}
                    <Col xs={12} lg={2} className="d-flex justify-content-around">
                        <Navbar.Text>
                            <Link to="/login">Sign in</Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Link to="/register">Register</Link>
                        </Navbar.Text>
                    </Col>
                </Navbar>
            </Row>

            <Row>
                <Navbar id="navbar2" className="border-top border-grey" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="d-flex justify-content-center" id="responsive-navbar-nav">
                            <Nav fill variant="tabs" defaultActiveKey="/home" >
                                <Nav.Link id="navigation-nav-links"><Link to="/films">Films</Link></Nav.Link>
                                <Nav.Link id="navigation-nav-links"><Link to="/series">Series</Link></Nav.Link>
                                <Nav.Link id="navigation-nav-links"><Link to="/actors">Actors</Link></Nav.Link>
                                <Nav.Link id="navigation-nav-links"><Link to="/rankings">Rankings</Link></Nav.Link>
                                <Nav.Link id="navigation-nav-links"><Link to="/news">News</Link></Nav.Link>
                                <Nav.Link id="navigation-nav-links"><Link to="/premiers">Premiers</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>

        </Container>

    )
}

export default Header