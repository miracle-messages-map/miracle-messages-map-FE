import React, { useState } from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Switch, Redirect, Route } from "react-router-dom"

import logo from "../../images/logo.png"

const NavbarLogo = () => {
    return (
        <Link to="/dashboard" className="topnav-logo">
            <img src={logo} alt="Logo of Miracle Messages" height="32" />
        </Link>
    )
}

const DashboardNavbar = ({ history }) => {
    const [fullName] = useState(
        JSON.parse(localStorage.getItem("auth")).fullName
    )
    const handleLogout = () => {
        localStorage.clear()
        history.push("/login")
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <NavbarLogo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style={{ justifyContent: "flex-end" }}>
                <Nav className="">
                    <NavDropdown title={fullName} className="float-right mb-0">
                        <NavDropdown.Item onClick={handleLogout}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Dashboard = () => {
    return <div>This is the dashboard!</div>
}

const AuthorizedLayout = ({ children, history, match }) => {
    return (
        <>
            <DashboardNavbar history={history} />
            <Switch>
                <Route path={match.path} component={Dashboard} />
                {/* <Route path="/login" component={LoginPage} /> */}
                <Redirect to={`${match.path}`} />
            </Switch>
        </>
    )
}

export default AuthorizedLayout
