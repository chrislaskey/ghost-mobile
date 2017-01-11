import React, { Component } from "react"
import { map } from "lodash"
import { connect } from "react-redux"
import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native"
import { closeNavigation } from "../actions/navigation"
import { isNavigationOpen } from "../reducers/navigation"
import NavigationItem from "./NavigationItem"
import styles from "../styles"

class Navigation extends Component {
  render() {
    const { isOpen, onClose } = this.props

    if (!isOpen) { return null }

    const items = {
      "Events": "events",
      "Upcoming": "upcoming",
      "History": "history",
      "Settings": "settings"
    }
    
    return (
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.navigationOverlay}>
          <View style={styles.navigation}>
            <ScrollView>
              {
                map(items, (value, key) => (
                  <NavigationItem
                    path={ value }
                    key={ key }
                    title={ key }
                  />
                ))
              }
            </ScrollView>
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
