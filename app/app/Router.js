import React from "react"
import { connect } from "react-redux"
import { getCurrentPath } from "../reducers/paths"

import Home from "../pages/Home"
import History from "../pages/History"
import Settings from "../pages/Settings"
import Upcoming from "../pages/Upcoming"

const Router = ({path}) => {
  const routes = {
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
