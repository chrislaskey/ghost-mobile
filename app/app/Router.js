import React from "react"
import { connect } from "react-redux"
import { getCurrentPath } from "../reducers/paths"

import EventForm from "../pages/EventForm"
import History from "../pages/History"
import Home from "../pages/Home"
import Settings from "../pages/Settings"
import Upcoming from "../pages/Upcoming"

const Router = ({path}) => {
  const routes = {
    "edit": <EventForm />,
    "history": <History />,
    "home": <Home />,
    "settings": <Settings />,
    "upcoming": <Upcoming />,
  }

  return routes[path.path] || routes["home"]
}

Router.displayName = "Router"

const mapStateToProps = (state) => ({
  path: getCurrentPath(state)
})

export default connect(mapStateToProps)(Router)
