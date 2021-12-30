import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, FormGroup, FormLabel, InputGroup, Label } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LoginForm() {
    return (
        <div className="login-div">
            <Form className="login-form">
                <h1 className="text-center">
                    <img
                        alt=""
                        src="/img/logo_m2w.png"
                        width="70"
                        height="70"
                        className="d-inline-block align-middle"
                    />{' '}
                    Moar2watch
                </h1>
                <h2 className="text-center">Welcome</h2>

                <FormGroup className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </FormGroup>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button className="btn-dark btn-block" size="lg" type="submit">
                        Log in
                    </Button>
                </div>

                <p className="text-center my-2">
                    or
                </p>

                <div className="d-flex justify-content-center">
                    <Link to="/register" style={{ textDecoration: 'none', textAlign: "center", width: "fit-content" }}>
                        <p className="register-p my-2">
                            Register
                        </p>
                    </Link>
                </div>

            </Form>
        </div>
    )
}

export default LoginForm