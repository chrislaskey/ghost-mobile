import React from "react"
import { connect } from "react-redux"
import { startsWith } from "lodash"
import { Text, TouchableWithoutFeedback, View } from "react-native"
import { closeNavigation } from "../actions/navigation"
import { updatePath } from "../actions/paths"
import { getCurrentPath } from "../reducers/paths"
import styles from "../styles"

const NavigationItem = ({ isActive, onPress, path, title }) => {
  const style = isActive ? styles.navigationItemActive : styles.navigationItem

  return (
    <TouchableWithoutFeedback onPress={ () => onPress(path) }>
      <View style={ style }>
        <Text>{ title }</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

NavigationItem.displayName = "NavigationItem"

const mapStateToProps = (state, { path }) => {
  const current = getCurrentPath(state)

  return {
    isActive: startsWith(current, path)
  }
}

const mapDispatchToProps = (dispatch, { path }) => ({
  onPress: (path) => {
    dispatch(closeNavigation())
    dispatch(updatePath(path))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationItem)
