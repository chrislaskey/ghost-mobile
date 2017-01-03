import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "remote-redux-devtools"
import initialState from "./initialState"
import reducers from "../reducers"

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware()
  )
)

export default store
