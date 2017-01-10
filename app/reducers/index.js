import { combineReducers } from "redux"
import events from "./events"
import navigation from "./navigation"
import notifications from "./notifications"
import paths from "./paths"

export default combineReducers({
  events,
  navigation,
  notifications,
  paths
})
