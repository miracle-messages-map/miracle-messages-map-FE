import React from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"

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
            <header>
                <h1>Miracle Messages</h1>
                <nav>
                    <NavLink to="/apply">Become a Volunteer</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </nav>
            </header>
            <Route exact path="/" component={VolunteerRegistration} />
            <Route path="/apply" component={VolunteerRegistration} />
            <Route path="/login" component={Login} />
        </Router>
    )
}

export default App
