import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import promiseMiddleware from "redux-promise-middleware"

const middleware = [thunkMiddleware, promiseMiddleware]
const composeEnhancers = composeWithDevTools({})

export default reducers => {
    return createStore(
        reducers,
        composeEnhancers(applyMiddleware(...middleware))
    )
}
