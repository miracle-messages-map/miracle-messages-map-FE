import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"

import { CardLayout } from "../Layout"
import FormInput from "../shared/FormInput"

const LoginPage = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        // TODO: Validate form-fields
        // TODO: Send login request
        // TODO: Display server errors, if any
        history.push("/dashboard")
    }

    return (
        <CardLayout
            greetingText="Welcome Back!"
            promptText="Login to your Account"
            footerPrompt="Don't have an account yet?"
            footerLink="/create-account"
            footerLinkText="Create an Account"
        >
            <Form onSubmit={handleSubmit}>
                <FormInput
                    value={email}
                    onChange={setEmail}
                    labelText="Email Address"
                    inputType="email"
                    isRequired={false}
                    placeholderText=""
                />
                <FormInput
                    value={password}
                    onChange={setPassword}
                    labelText="Password"
                    inputType="password"
                    isRequired={false}
                    placeholderText=""
                />
                <Form.Group className="mb-0 text-center">
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form.Group>
            </Form>
        </CardLayout>
    )
}

export default LoginPage
