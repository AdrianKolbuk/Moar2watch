import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, FormControl, InputGroup, Button, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../helpers/authHelper'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';

class Header extends React.Component {

    render() {
        const loginLogoutLink = isAuthenticated() ?
            <span className="header-logout" onClick={this.props.handleLogout}>Logout <LogoutIcon /></span> :
            <Link to="/login" style={{ textDecoration: 'none', color: "white", fontSize: "large" }}><span className="header-link"><LoginIcon /> Login</span></Link>

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
                            <Form className="search-form" action="/results" method="get">
                                <InputGroup className="">
                                    <FormControl
                                        type="text"
                                        placeholder="Search for films or series..."
                                        aria-label="Search-value"
                                        aria-describedby="basic-addon2"
                                        name="search"
                                    />
                                    <Button id="button-addon2" type="submit">
                                        <SearchIcon />
                                    </Button>
                                </InputGroup>
                            </Form>
                        </Col>

                        <Col xs={12} lg={2} className="d-flex justify-content-around">
                            <Navbar.Text>
                                {loginLogoutLink}
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
                                    <Nav.Link as="div" id="navigation-nav-links"><Link to="/films" style={{ textDecoration: 'none', color: "white" }}><span className="nav-span">Films</span></Link></Nav.Link>
                                    <Nav.Link as="div" id="navigation-nav-links"><Link to="/series" style={{ textDecoration: 'none', color: "white" }}><span className="nav-span">Series</span></Link></Nav.Link>
                                    <Nav.Link as="div" id="navigation-nav-links"><Link to="/award_winners" style={{ textDecoration: 'none', color: "white" }}><span className="nav-span">Award winners</span></Link></Nav.Link>
                                    <Nav.Link as="div" id="navigation-nav-links"><Link to="/top100s" style={{ textDecoration: 'none', color: "white" }}><span className="nav-span">Top 100's</span ></Link></Nav.Link>
                                    {isAuthenticated() &&
                                        <Nav.Link as="div" id="navigation-nav-links"><Link to="/likelist" style={{ textDecoration: 'none', color: "white" }}><span className="nav-span">Liked titles</span></Link></Nav.Link>
                                    }
                                    {isAuthenticated() &&
                                        <Nav.Link as="div" id="navigation-nav-links"><Link to="/watchlist" style={{ textDecoration: 'none', color: "white" }}><span className="nav-span">Your watchlist</span></Link></Nav.Link>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Row>

            </Container>

        )
    }
}

export default Header