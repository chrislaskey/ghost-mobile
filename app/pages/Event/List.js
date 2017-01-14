import React from "react"
import { connect } from "react-redux"
import { ListView, Text, View } from "react-native"
import { isEmpty } from "lodash"
import { startEvent, stopEvent } from "../../actions/events"
import { updatePath } from "../../actions/paths"
import { getEvents } from "../../reducers/events"
import { getUpcomingNotifications } from "../../reducers/notifications"
import styles from "../../styles"
import Page from "../../layouts/Page"
import Button from "../../components/Button"

const EventList = ({ events, isActive, linkTo }) => {
  const renderList = () => {
    if (isEmpty(events)) {
      return <View />
    }

    const dataSourceConfig = new ListView.DataSource({
      rowHasChanged: (rowOne, rowTwo) => rowOne.id !== rowTwo.id
    })

    const dataSource = dataSourceConfig.cloneWithRows(events)

    const renderRow = (event) => {
      const active = isActive(event)
    
      return (
        <View>
          <Button
            onPress={ () => linkTo(`events/${event.id}`) }
            text={ event.name }
          />
        </View>
      )
    }

    return (
      <ListView
        dataSource={ dataSource }
        renderRow={ renderRow }
      />
    )
  }

  return (
    <Page>
      <Text style={ styles.text }>Events</Text>
      { renderList() }
      <Button
        onPress={ () => linkTo("events/new") }
        text="New Event"
      />
    </Page>
  )
}

EventList.displayName = "EventList"

const mapStateToProps = (state) => {
  const events = getEvents(state)
  const isActive = (event) => !isEmpty(
    getUpcomingNotifications(state, event.id)
  )

  return {
    events,
    isActive
  }
}

const mapDispatchToProps = (dispatch) => ({
  linkTo: (path) => dispatch(updatePath(path)),
  onStart: (event) => dispatch(startEvent(event)),
  onStop: (event) => dispatch(stopEvent(event))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList)
