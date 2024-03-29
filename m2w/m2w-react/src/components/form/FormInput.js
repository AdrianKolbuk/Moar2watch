import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'

function FormInput(props) {
    const className = props.error === '' ? '' : 'error-input'
    const name = props.name
    const errorSpanId = 'error' + name[0].toUpperCase() + name.slice(1)
    return (
        <>
            {/* <label htmlFor={props.name}>
                {props.label}:
                {props.required && <abbr title="required" aria-label="required">*</abbr>}
            </label>
            <input
                type={props.type}
                className={className}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} />
            <span id={errorSpanId} className="errors-text">{props.error}</span> */}

            <Form.Label htmlFor={props.name}>{props.label}</Form.Label>
            <Form.Control
                as='input'
                type={props.type}
                className={className}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <span id={errorSpanId} className="errors-text">{props.error}</span>
        </>
    )
}

export default FormInput