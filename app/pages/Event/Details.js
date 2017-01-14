import React from "react"
import { connect } from "react-redux"
import { Text, View } from "react-native"
import { startEvent, stopEvent } from "../../actions/events"
import { getFirstEvent } from "../../reducers/events"
import {
  getUpcomingNotifications,
  getNotifications
} from "../../reducers/notifications"
import styles from "../../styles"
import Page from "../../layouts/Page"
import Button from "../../components/Button"

const EventDetails = ({ upcomingNotifications, event, notifications, onStart, onStop }) => {
  return (
    <Page>
      <Text style={ styles.text }>Event Details</Text>
      <View>
        <Button onPress={ () => onStart(event) } text="Start" />
        <Text style={ styles.text }>Event ID</Text>
        <Text style={ styles.text }>{ event.id }</Text>
        <Text style={ styles.text }>Event Name</Text>
        <Text style={ styles.text }>{ event.name }</Text>
        <Text style={ styles.text }>Event Interval</Text>
        <Text style={ styles.text }>{ event.interval / 1000} seconds</Text>
        <Text style={ styles.text }>Event Repeat</Text>
        <Text style={ styles.text }>{ event.repeat }</Text>
        <Text style={ styles.text }>Active Notifications</Text>
        <Text style={ styles.text }>{ upcomingNotifications.length }</Text>
        <Text style={ styles.text }>Total Notifications</Text>
        <Text style={ styles.text }>{ notifications.length }</Text>
        <Button onPress={ () => onStop(event) } text="Stop" />
      </View>
    </Page>
  )
}

EventDetails.displayName = "EventDetails"

const mapStateToProps = (state) => {
  const event = getFirstEvent(state)
  const upcomingNotifications = getUpcomingNotifications(state, event.id)
  const notifications = getNotifications(state, event.id)

  return {
    upcomingNotifications,
    event,
    notifications
  }
}

const mapDispatchToProps = (dispatch) => ({
  onStart: (event) => dispatch(startEvent(event)),
  onStop: (event) => dispatch(stopEvent(event))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetails)
