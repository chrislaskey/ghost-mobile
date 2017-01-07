import { combineReducers } from "redux"
import events from "./events"
import notifications from "./notifications"
import paths from "./paths"

export default combineReducers({
  events,
  notifications,
  paths
})
