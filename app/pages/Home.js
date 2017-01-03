import React from "react"
import { connect } from "react-redux"
import { Text, View } from "react-native"
import { getEvent } from "../reducers/events"
import Page from "../layouts/Page"
import styles from "../styles"

const Home = ({event}) => (
  <Page>
    <Text style={styles.text}>Home</Text>
  </Page>
)

Home.displayName = "Home"

const mapStateToProps = (state) => ({
  event: getEvent(state)
})

const mapDispatchToProps = () => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
