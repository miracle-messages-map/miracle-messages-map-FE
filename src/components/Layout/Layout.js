import React from "react"
import { Container, Row } from "react-bootstrap"
import { Switch, Redirect, Route } from "react-router-dom"

import { CreateAccountPage, LoginPage } from "../Pages"

const Layout = () => {
    return (
        <div className="mt-5 mb-5">
            <Container>
                <Row className="justify-content-center">
                    <Switch>
                        <Route
                            path="/create-account"
                            component={CreateAccountPage}
                        />
                        <Route path="/login" component={LoginPage} />
                        <Redirect to="/dashboard" />
                    </Switch>
                </Row>
            </Container>
        </div>
    )
}

export default Layout
