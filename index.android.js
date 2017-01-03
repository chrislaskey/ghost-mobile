import React, { Component } from "react"
import App from "./app/app"
import { AppRegistry } from "react-native"

export default class ghost extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent("ghost", () => ghost)
