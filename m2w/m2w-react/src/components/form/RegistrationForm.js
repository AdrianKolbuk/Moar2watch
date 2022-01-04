import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, FormGroup } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { checkRequired, checkTextLengthRange, checkEmail, checkConfirmPassword } from '../../helpers/validationCommon'
import { addUserApiCall } from '../../apiCalls/userApiCalls'
import FormInput from '../form/FormInput'
import RegisterFormButton from '../form/RegisterFormButton'

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                nickname: '',
                email: '',
                password: '',
            },
            errors: {
                nickname: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            redirect: false,
            error: null
        }
    }

    componentDidMount = () => {

    }

    validateField = (fieldName, fieldValue) => {
        let errorMessage = '';
        if (fieldName === 'nickname') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Field is required'
            } else if (!checkTextLengthRange(fieldValue, 2, 60)) {
                errorMessage = 'Field must contain from 2 to 60 characters'
            }
        }
        if (fieldName === 'email') {
            if (!checkRequired(fieldValue)) {
                errorMessage = "Field is required";
            } else if (!checkTextLengthRange(fieldValue, 5, 60)) {
                errorMessage = "Field must contain from 5 to 60 characters";
            } else if (!checkEmail(fieldValue)) {
                errorMessage = "Field must contain a valid email";
            }
        }
        if (fieldName === 'password') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Field is required'
            } else if (!checkTextLengthRange(fieldValue, 5, 60)) {
                errorMessage = 'Field must contain from 5 to 60 characters'
            }
        }
        if (fieldName === 'confirmPassword') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Field is required'
            } else if (!checkConfirmPassword(fieldValue, this.state.user.password)) {
                errorMessage = 'Password and password confirmation must be the same'
            }
        }
        return errorMessage
    }

    handleChange = (event) => {
        const { name, value } = event.target
        const user = { ...this.state.user }
        user[name] = value

        const errorMessage = this.validateField(name, value)
        const errors = { ...this.state.errors }
        errors[name] = errorMessage

        this.setState({
            user: user,
            errors: errors
        })
    }

    hasErrors = () => {
        const errors = this.state.errors
        for (const errorField in this.state.errors) {
            if (errors[errorField].length > 0) {
                return true
            }
        }
        return false
    }

    validateForm = () => {
        const user = this.state.user
        const errors = this.state.errors
        for (const fieldName in user) {
            const fieldValue = user[fieldName]
            const errorMessage = this.validateField(fieldName, fieldValue)
            errors[fieldName] = errorMessage
        }
        this.setState({
            errors: errors
        })
        return !this.hasErrors()
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validateForm()
        if (isValid) {
            const
                user = this.state.user;
            let
                promise,
                response;

            promise = addUserApiCall(user)

            if (promise) {
                promise
                    .then(
                        (data) => {
                            response = data
                            if (response.status === 201 || response.status === 500) {
                                return data.json()
                            }
                        })
                    .then(
                        (data) => {
                            if (!response.ok && response.status === 500) {
                                console.log(data)
                                for (const i in data) {
                                    const errorItem = data[i]
                                    const errorMessage = errorItem.message
                                    const fieldName = errorItem.path
                                    const errors = { ...this.state.errors }
                                    errors[fieldName] = errorMessage
                                    this.setState({
                                        errors: errors,
                                        error: null
                                    })
                                }
                            } else {
                                this.setState({ redirect: true })
                            }
                        },
                        (error) => {
                            this.setState({ error })
                            console.log(error)
                        }
                    )
            }
        }
    }



    render() {

        const { redirect } = this.state
        if (redirect) {
            const notice = "User registration succesful"

            return (
                <Redirect to={{
                    pathname: "/",
                    state: {
                        notice: notice
                    }
                }} />
            )
        }

        const errorsSummary = this.hasErrors() ? 'Form has errors' : ''
        const fetchError = this.state.error ? `Error: ${this.state.error.message}` : ''
        const globalErrorMessage = errorsSummary || fetchError || this.state.message


        return (
            <div className="login-div">
                <Form className="login-form" onSubmit={this.handleSubmit}>
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
                        <FormInput
                            type="text"
                            label="Nickname"
                            required
                            error={this.state.errors.nickname}
                            name="nickname"
                            placeholder="Enter nickname"
                            onChange={this.handleChange}
                            value={this.state.user.nickname}
                        />
                    </FormGroup>

                    <FormGroup className="mb-3" controlId="formBasicEmail">
                        <FormInput
                            type="text"
                            label="Email"
                            required
                            error={this.state.errors.email}
                            name="email"
                            placeholder="Enter email"
                            onChange={this.handleChange}
                            value={this.state.user.email}
                        />
                    </FormGroup>

                    <FormGroup className="mb-3" controlId="formBasicPassword">
                        <FormInput
                            id="password-input"
                            type="password"
                            label="Password"
                            required
                            error={this.state.errors.password}
                            name="password"
                            placeholder="Enter password"
                            onChange={this.handleChange}
                            value={this.state.user.password}
                        />
                    </FormGroup>

                    <FormGroup className="mb-3" controlId="formBasicPassword">
                        <FormInput
                            type="password"
                            label="Confirm password"
                            required
                            error={this.state.errors.confirmPassword}
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <RegisterFormButton
                        error={globalErrorMessage} submitButtonLabel="Register"
                    />


                    <p className="text-center my-2">
                        Already have an account?
                    </p>

                    <div className="d-flex justify-content-center">
                        <Link to="/Login" style={{ textDecoration: 'none', textAlign: "center", width: "fit-content" }}>
                            <p className="register-p my-2">
                                Login
                            </p>
                        </Link>
                    </div>

                </Form>
            </div>
        )
    }
}

export default RegistrationForm