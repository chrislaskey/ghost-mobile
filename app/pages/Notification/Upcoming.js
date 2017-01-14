import React from "react"
import { connect } from "react-redux"
import { ListView, Text, View } from "react-native"
import { isEmpty } from "lodash"
import { getEvent } from "../../reducers/events"
import { getUpcomingNotifications } from "../../reducers/notifications"
import styles from "../../styles"
import Page from "../../layouts/Page"

const NotificationUpcoming = ({ lookupRelatedEvent, notifications }) => {
  const renderList = () => {
    if (isEmpty(notifications)) {
      return (
        <Text style={ styles.text }>
          No upcoming notifications
        </Text>
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
      <ListView
        dataSource={ dataSource }
        renderRow={ renderRow }
      />
    )
  }

  return (
    <Page>
      <Text style={ styles.text }>Upcoming</Text>
      { renderList() }
    </Page>
  )
}

NotificationUpcoming.displayName = "NotificationUpcoming"

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
)(NotificationUpcoming)
