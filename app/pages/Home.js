import React from "react"
import { connect } from "react-redux"
import { Text, View } from "react-native"
import { startEvent, stopEvent } from "../actions/events"
import { getEvent } from "../reducers/events"
import styles from "../styles"
import Page from "../layouts/Page"
import Button from "../components/Button"

const Home = ({ event, onStart, onStop }) => {
  return (
    <Page>
      <Text style={ styles.text }>Home</Text>
      <View>
        <Text style={ styles.text }>Event ID</Text>
        <Text style={ styles.text }>{ event.id }</Text>
        <Text style={ styles.text }>Event Name</Text>
        <Text style={ styles.text }>{ event.name }</Text>
        <Text style={ styles.text }>Event Interval</Text>
        <Text style={ styles.text }>{ event.interval / 1000} seconds</Text>
        <Text style={ styles.text }>Event Repeat</Text>
        <Text style={ styles.text }>{ event.repeat }</Text>
        <Button onPress={ onStart } text="Start" />
        <Button onPress={ onStop } text="Stop" />
      </View>
    </Page>
  )
}

Home.displayName = "Home"

const mapStateToProps = (state) => ({
  event: getEvent(state)
})

const mapDispatchToProps = (dispatch) => ({
  onStart: (event) => dispatch(startEvent(event)),
  onStop: (event) => dispatch(stopEvent(event))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
