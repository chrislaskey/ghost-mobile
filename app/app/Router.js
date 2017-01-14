import React from "react"
import { connect } from "react-redux"
import { forEach } from "lodash"
import { getCurrentPath } from "../reducers/paths"
import EventDetails from "../pages/Event/Details"
import EventForm from "../pages/Event/Form"
import EventList from "../pages/Event/List"
import NotificationHistory from "../pages/Notification/History"
import NotificationUpcoming from "../pages/Notification/Upcoming"
import Settings from "../pages/Settings"

const Router = ({ currentPath }) => {
  const home = <EventList />
  const paths = {
    "events": EventList,
    "events/new": EventForm,
    "events/(.*)/edit": EventForm,
    "events/(.*)": EventDetails,
    "notifications/history": NotificationHistory,
    "notifications/upcoming": NotificationUpcoming,
    "settings": Settings
  }

  let page

  forEach(paths, (Component, key) => {
    const pattern = new RegExp("^" + key + "$")
    const path = currentPath.path || ""
    const match = path.match(pattern)

    if (match) {
      console.log(path, key, !!match)

      page = <Component route={match} />
      return false
    }
  })

  return page || home
}

Router.displayName = "Router"

const mapStateToProps = (state) => ({
  currentPath: getCurrentPath(state)
})

export default connect(mapStateToProps)(Router)
