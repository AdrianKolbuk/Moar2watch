import React from 'react'
import FormInput from '../form/FormInput'
import { loginApiCall } from '../../apiCalls/authApiCalls'
import { checkRequired } from '../../helpers/validationCommon'
import { Form, FormGroup } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import LoginButton from './LoginButton'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                email: '',
                password: ''
            },
            errors: {
                email: '',
                password: ''
            },
            error: '',
            message: '',
            prevPath: ''
        }
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

    validateField = (fieldName, fieldValue) => {
        let errorMessage = ''
        if (fieldName === 'email') {
            if (!checkRequired(fieldValue)) {
                errorMessage = "Field is required"
            }
        }
        if (fieldName === 'password') {
            if (!checkRequired(fieldValue)) {
                errorMessage = "Field is required"
            }
        }
        return errorMessage
    }

    validateForm = () => {
        // return true
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

    hasErrors = () => {
        const errors = this.state.errors
        for (const errorField in this.state.errors) {
            if (errors[errorField].length > 0) {
                return true
            }
        }
        return false
    }

    handleSumbit = (event) => {
        event.preventDefault()
        const isValid = this.validateForm()
        if (isValid) {
            const user = this.state.user
            let response
            loginApiCall(user)
                .then(res => {
                    response = res
                    return res.json()
                })
                .then(
                    (data) => {
                        if (response.status === 200) {
                            if (data.token) {
                                const userString = JSON.stringify(data)
                                this.props.handleLogin(userString)
                                this.props.history.goBack()
                            }
                        } else if (response.status === 401) {
                            console.log(401)
                            this.setState({ message: data.message })
                        }
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        })
                    })
        }
    }

    render() {
        const errorsSummary = this.hasErrors() ? 'Form has errors' : ''
        const fetchError = this.state.error ? `Error: ${this.state.error.message}` : ''
        const globalErrorMessage = errorsSummary || fetchError || this.state.message

        return (
            <div className="login-div">
                <form method='post' onSubmit={this.handleSubmit}>
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
                            <FormInput
                                name="email"
                                value={this.state.user.email}
                                error={this.state.errors.email}
                                placeholder="Enter email"
                                label="Email"
                                onChange={this.handleChange}
                                type="text"
                            />
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formBasicPassword">
                            <FormInput
                                type="password"
                                label="Password"
                                error={this.state.errors.password}
                                name="password"
                                placeholder="Enter password"
                                onChange={this.handleChange}
                                value={this.state.user.password}
                            />
                        </FormGroup>

                        <LoginButton
                            error={globalErrorMessage} submitButtonLabel="Login"
                        />

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
                </form>
            </div>
        )
    }
}

// const withRouter = WrappedComponent => props => {
//     const navigate = useNavigate();
//     // etc... other react-router-dom v6 hooks

//     return (
//         <WrappedComponent
//             {...props}
//             history={navigate}
//         // etc...
//         />
//     );
// };

export default withRouter(LoginForm)
