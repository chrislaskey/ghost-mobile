import React from "react"
import { View } from "react-native"
import Router from "./Router"
import styles from "../styles"

const Root = () => (
  <View style={styles.rootContainer}>
    <Router />
  </View>
)

Root.displayName = "Root"

export default Root
