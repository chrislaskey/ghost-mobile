import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "remote-redux-devtools"
import { autoRehydrate, persistStore } from "redux-persist"
import { AsyncStorage } from "react-native"
import thunk from "redux-thunk"
import initialState from "./initialState"
import reducers from "../reducers"

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk),
    autoRehydrate()
  )
)

export const persistedStore = persistStore(store, {storage: AsyncStorage})

export default store
