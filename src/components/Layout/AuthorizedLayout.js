import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

import logo from "../../images/logo.png"

const NavbarLogo = () => {
    return (
        <Link to="/dashboard" className="topnav-logo">
            <img src={logo} alt="Logo of Miracle Messages" height="32" />
        </Link>
    )
}

const DashboardNavbar = ({ history }) => {
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
            <Navbar.Collapse style={{ "justify-content": "flex-end" }}>
                <Nav className="">
                    <NavDropdown title="BarnBarn" className="float-right mb-0">
                        <NavDropdown.Item onClick={handleLogout}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const AuthorizedLayout = ({ children, history }) => {
    return (
        <>
            <DashboardNavbar history={history} />
            {children}
        </>
    )
}

export default AuthorizedLayout
