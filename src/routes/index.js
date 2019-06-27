import React from "react"
import { Route, Redirect } from "react-router-dom"

import { verifyToken } from "../api"

export const AuthorizedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                verifyToken() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    )
}
