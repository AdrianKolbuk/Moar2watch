import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function RegisterFormButton(props) {

    return (
        <div className="register-form-button d-grid gap-2">
            <p id="errorsSummary" className="errors-text">{props.error}</p>
            <input className="form-button-submit" type="submit" value={props.submitButtonLabel} />
        </div>
    )
}

export default RegisterFormButton