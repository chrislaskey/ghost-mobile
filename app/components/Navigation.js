import React, { Component } from "react"
import { connect } from "react-redux"
import { Text, TouchableWithoutFeedback, View } from "react-native"
import { closeNavigation } from "../actions/navigation"
import { isNavigationOpen } from "../reducers/navigation"
import styles from "../styles"

class Navigation extends Component {
  render() {
    const { isOpen, onClose } = this.props

    if (!isOpen) { return null }
    
    return (
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.navigationOverlay}>
          <View style={styles.navigation}>
            <Text>Navigation</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = (state) => ({
  isOpen: isNavigationOpen(state)
})

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeNavigation())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
