import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, FormControl, InputGroup, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Container id="header" fluid>
            <Row>
                <Navbar id="navbar" bg="Dark" variant="dark" expand="lg">

                    <Col xs={12} lg={2} className="d-flex justify-content-center">
                        <Navbar.Brand>
                            <Link to="/" style={{ textDecoration: 'none', color: "white" }}>
                                <img
                                    alt=""
                                    src="/img/logo_m2w.png"
                                    width="70"
                                    height="70"
                                    className="d-inline-block align-middle"
                                />{' '}
                                Moar2watch
                            </Link>
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
                            <Link to="/login" style={{ textDecoration: 'none', color: "white", fontSize: "large" }}><span className="header-link">Login</span></Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Link to="/register" style={{ textDecoration: 'none', color: "white", fontSize: "large" }}><span className="header-link">Register</span></Link>
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
                                <Nav.Link id="navigation-nav-links"><Link to="/films" style={{ textDecoration: 'none', color: "white" }}><span className="nav-span">Films</span></Link></Nav.Link>
                                <Nav.Link id="navigation-nav-links"><Link to="/series" style={{ textDecoration: 'none', color: "white" }}><span className="nav-span">Series</span></Link></Nav.Link>
                                <Nav.Link id="navigation-nav-links"><Link to="/award_winners" style={{ textDecoration: 'none', color: "white" }}><span className="nav-span">Award winners</span></Link></Nav.Link>
                                <Nav.Link id="navigation-nav-links"><Link to="/top100s" style={{ textDecoration: 'none', color: "white" }}><span className="nav-span">Top 100's</span ></Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>

        </Container>

    )
}

export default Header