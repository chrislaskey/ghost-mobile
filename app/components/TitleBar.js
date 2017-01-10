import React from "react"
import { connect } from "react-redux"
import { Text, View } from "react-native"
import Button from "./Button"
import { openNavigation } from "../actions/navigation"
import styles from "../styles"

const TitleBar = ({ onOpenNavigation }) => {
  return (
    <View style={ styles.titleBar }>
      <Button onPress={ onOpenNavigation }>
        <Text style={ styles.text }>Menu</Text>
      </Button>
      <Text style={ styles.text }>Ghost</Text>
      <Button>
        <Text style={ styles.text }>+</Text>
      </Button>
    </View>
  )
}

TitleBar.displayName = "TitleBar"

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({
  onOpenNavigation: () => dispatch(openNavigation())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBar)
