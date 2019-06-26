import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { RouteComponentProps } from "react-router-dom"

import SingleCardLayout from "./SingleCardLayout"
import FormInput from "./FormInput"

interface AccountInfoFormProps extends RouteComponentProps {}

const AccountInfoForm: React.FunctionComponent<AccountInfoFormProps> = ({
    history
}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(email, password, passwordConfirmation)
        history.push("/")
    }

    return (
        <SingleCardLayout
            greetingText="Create Your Account"
            promptText="Let's create an account for you,"
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
        </SingleCardLayout>
    )
}

export default AccountInfoForm
