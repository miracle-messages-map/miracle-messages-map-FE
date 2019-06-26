import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import App from "./App"

import createStore from "./store"
import reducer from "./reducers"

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App />
    </Provider>,
    document.getElementById("root")
)
