import React from "react"
import { Provider } from "react-redux"
import Root from "./Root"
import store from "./store"

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
)

App.displayName = "App"

export default App
