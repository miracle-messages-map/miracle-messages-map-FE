import React, { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"

import { CardLayout } from "../Layout"
import FormInput from "../shared/FormInput"

import { login, verifyToken } from "../../api"

const LoginPage = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (verifyToken()) {
            history.push("/dashboard")
        }
    }, [history])

    const handleSubmit = e => {
        e.preventDefault()
        // TODO: Validate form-fields

        login({ email, password })
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
