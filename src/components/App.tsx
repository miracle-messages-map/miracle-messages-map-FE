import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "../scss/styles.scss"

import { ProtectedRoute } from "../routes"
import AccountInfoForm from "./AccountInfoForm"

const Home = () => {
    return (
        <>
            <h2>Home</h2>
            <p>Welcome</p>
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
            <Switch>
                <ProtectedRoute exact path="/" component={Home} />
                <Route path="/create-account" component={AccountInfoForm} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    )
}

export default App
