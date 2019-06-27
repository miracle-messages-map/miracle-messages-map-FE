import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "../scss/styles.scss"

import { AuthorizedRoute } from "../routes"
import { AuthorizedLayout, Layout } from "./Layout"

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <AuthorizedRoute
                    path="/dashboard"
                    component={AuthorizedLayout}
                />
                <Route path="/" component={Layout} />
            </Switch>
        </Router>
    )
}

export default App
