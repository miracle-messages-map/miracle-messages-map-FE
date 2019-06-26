import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { LinkContainer as Link } from "react-router-bootstrap"
import { Navbar, Nav } from "react-bootstrap"

import "./scss/styles.scss"

const VolunteerRegistration = () => {
    return (
        <>
            <h2>Register</h2>
            <p>Apply to be a volunteer</p>
        </>
    )
}
const Login = () => {
    return (
        <>
            <h2>Login</h2>
            <p>Login to your account</p>
        </>
    )
}

const App: React.FC = () => {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Link to="/">
                    <Navbar.Brand>Miracle Messsages</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/apply">
                            <Nav.Link>Become a Volunteer</Nav.Link>
                        </Link>
                        <Link to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route exact path="/" component={VolunteerRegistration} />
            <Route path="/apply" component={VolunteerRegistration} />
            <Route path="/login" component={Login} />
        </Router>
    )
}

export default App
