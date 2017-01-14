import React from "react"
import { connect } from "react-redux"
import { Text, View } from "react-native"
import { isEmpty } from "lodash"
import Button from "./Button"
import { openNavigation } from "../actions/navigation"
import { deletePath } from "../actions/paths"
import { getCurrentPath } from "../reducers/paths"
import styles from "../styles"

const TitleBar = ({ hasHistory, navigateBack, openNavigation }) => {
  return (
    <View style={ styles.titleBar }>
      <Button onPress={ navigateBack }>
        { hasHistory &&
          <Text style={ styles.text }>Back</Text>
        }
      </Button>
      <Text style={ styles.text }>Ghost</Text>
      <Button onPress={ openNavigation }>
        <Text style={ styles.text }>Menu</Text>
      </Button>
    </View>
  )
}

TitleBar.displayName = "TitleBar"

const mapStateToProps = (state) => ({
  hasHistory: !isEmpty(getCurrentPath(state))
})

const mapDispatchToProps = (dispatch) => ({
  navigateBack: () => dispatch(deletePath()),
  openNavigation: () => dispatch(openNavigation())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBar)
