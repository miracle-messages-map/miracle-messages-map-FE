import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"

import { addVolunteer } from "../../api"

import { CardLayout } from "../Layout"
import FormInput from "../shared/FormInput"

const CreateAccountPage = ({ history }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        // TODO: Validate form-fields, for real
        if (password !== passwordConfirmation)
            return alert(`Passwords must match!`)

        addVolunteer({ firstName, lastName, email, password })
            .then(() => {
                history.push("/dashboard")
            })
            .catch(({ message, statusCode }) => {
                // TODO: Display server errors in a Toast, if any
                alert(`${statusCode} Error\n${message}`)
            })
    }

    return (
        <CardLayout
            greetingText="Create Your Account"
            promptText="Let's create an account for you."
            footerPrompt="Already have an account?"
            footerLink="/login"
            footerLinkText="Log In"
        >
            <Form onSubmit={handleSubmit}>
                <FormInput
                    value={firstName}
                    onChange={setFirstName}
                    labelText="First Name"
                    inputType="text"
                    isRequired={true}
                    placeholderText=""
                />
                <FormInput
                    value={lastName}
                    onChange={setLastName}
                    labelText="Last Name"
                    inputType="text"
                    isRequired={true}
                    placeholderText=""
                />
                <FormInput
                    value={email}
                    onChange={setEmail}
                    labelText="Email Address"
                    inputType="email"
                    isRequired={true}
                    placeholderText=""
                />
                <FormInput
                    value={password}
                    onChange={setPassword}
                    labelText="Password"
                    inputType="password"
                    isRequired={true}
                    placeholderText=""
                />
                <FormInput
                    value={passwordConfirmation}
                    onChange={setPasswordConfirmation}
                    labelText="Confirm Password"
                    inputType="password"
                    isRequired={true}
                    placeholderText=""
                />
                <Form.Group className="mb-0 text-center">
                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Form.Group>
            </Form>
        </CardLayout>
    )
}

export default CreateAccountPage
