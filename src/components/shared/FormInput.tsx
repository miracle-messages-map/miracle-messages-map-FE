import React, { useState } from "react"
import { Form } from "react-bootstrap"
import uuid from "uuid/v4"

interface FormInputProps {
    value: string
    labelText: string
    placeholderText: string
    inputType: string
    isRequired: boolean
    onChange: (value: string) => void
}

const FormInput: React.FunctionComponent<FormInputProps> = ({
    value,
    labelText,
    placeholderText,
    inputType,
    isRequired,
    onChange
}) => {
    const [id] = useState(uuid())
    const handleValueChange = (event: any) => {
        let target = event.target as HTMLInputElement
        onChange(target.value)
    }

    return (
        <Form.Group>
            <Form.Label htmlFor={id}>{labelText}</Form.Label>
            <Form.Control
                type={inputType}
                id={id}
                required={isRequired}
                placeholder={placeholderText}
                value={value}
                onChange={handleValueChange}
            />
        </Form.Group>
    )
}

export default FormInput
