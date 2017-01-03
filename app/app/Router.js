import React from "react"
import { connect } from "react-redux"
import { getCurrentPath } from "../reducers/paths"

import Home from "../pages/Home"

const Router = ({path}) => {
  const routes = {
    "home": <Home />
  }

  return routes[path.path] || routes["home"]
}

Router.displayName = "Router"

const mapStateToProps = (state) => ({
  path: getCurrentPath(state)
})

export default connect(mapStateToProps)(Router)
