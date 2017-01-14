import React from "react"
import { connect } from "react-redux"
import { ListView, Text, View } from "react-native"
import { isEmpty } from "lodash"
import { getEvent } from "../reducers/events"
import { getUpcomingNotifications } from "../reducers/notifications"
import styles from "../styles"
import Page from "../layouts/Page"

const Upcoming = ({ lookupRelatedEvent, notifications }) => {
  const heading = (
    <Text style={ styles.text }>Upcoming</Text>
  )

  if (isEmpty(notifications)) {
    return (
      <Page>
        { heading }
        <Text style={ styles.text }>
          No upcoming notifications
        </Text>
      </Page>
    )
  }

  const dataSourceConfig = new ListView.DataSource({
    rowHasChanged: (rowOne, rowTwo) => rowOne.id !== rowTwo.id
  })

  const dataSource = dataSourceConfig.cloneWithRows(notifications)

  const renderRow = (item) => {
    const event = lookupRelatedEvent(item)
  
    return (
      <View>
        <Text>Hello</Text>
      </View>
    )
  }

  return (
    <Page>
      { heading }
      <ListView
        dataSource={ dataSource }
        renderRow={ renderRow }
      />
    </Page>
  )
}

Upcoming.displayName = "Upcoming"

const mapStateToProps = (state) => {
  const notifications = getUpcomingNotifications(state)
  const lookupRelatedEvent = (item) => getEvent(state, item.eventId)

  return {
    lookupRelatedEvent,
    notifications
  }
}

const mapDispatchToProps = () => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upcoming)
