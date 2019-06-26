import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

const middleware = []
const composeEnhancers = composeWithDevTools({})

export default reducers => {
    return createStore(
        reducers,
        composeEnhancers(applyMiddleware(...middleware))
    )
}
