import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"

import { CardLayout } from "../Layout"
import FormInput from "../shared/FormInput"

const CreateAccountPage = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        // TODO: Validate form-fields
        // TODO: Send create volunteer request
        // TODO: Display server errors, if any
        history.push("/login")
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
