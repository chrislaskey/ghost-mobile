import React from "react"
import { connect } from "react-redux"
import { Text, TouchableHighlight, View } from "react-native"
import { persistedStore } from "../app/store"
import Page from "../layouts/Page"
import styles from "../styles"

const Settings = ({ onPurgeStore }) => {
  return (
    <Page>
      <Text style={styles.text}>Settings</Text>
      <TouchableHighlight onPress={onPurgeStore}>
        <View>
          <Text style={styles.text}>Reset All Data</Text>
        </View>
      </TouchableHighlight>
    </Page>
  )
}

Settings.displayName = "Settings"

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({
  onPurgeStore: () => persistedStore.purge()
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
