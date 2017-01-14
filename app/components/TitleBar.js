import React from "react"
import { connect } from "react-redux"
import { Text, View } from "react-native"
import Button from "./Button"
import { openNavigation } from "../actions/navigation"
import { updatePath } from "../actions/paths"
import styles from "../styles"

const TitleBar = ({ openNew, openNavigation }) => {
  return (
    <View style={ styles.titleBar }>
      <Button onPress={ openNavigation }>
        <Text style={ styles.text }>Menu</Text>
      </Button>
      <Text style={ styles.text }>Ghost</Text>
      <Button onPress={ openNew }>
        <Text style={ styles.text }>New</Text>
      </Button>
    </View>
  )
}

TitleBar.displayName = "TitleBar"

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({
  openNew: () => dispatch(updatePath("events/new")),
  openNavigation: () => dispatch(openNavigation())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBar)
