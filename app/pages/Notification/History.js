import React from "react"
import { connect } from "react-redux"
import { ListView, Text, View } from "react-native"
import { isEmpty } from "lodash"
import { getFirstEvent } from "../../reducers/events"
import { getPastNotifications } from "../../reducers/notifications"
import styles from "../../styles"
import Page from "../../layouts/Page"

const NotificationHistory = ({ notifications, lookupRelatedEvent }) => {
  const renderList = () => {
    if (isEmpty(notifications)) {
      return (
        <Text style={ styles.text }>
          No past notifications
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
      <Text style={ styles.text }>History</Text>
      { renderList() }
    </Page>
  )
}

NotificationHistory.displayName = "NotificationHistory"

const mapStateToProps = (state) => {
  const notifications = getPastNotifications(state)
  const lookupRelatedEvent = (item) => getFirstEvent(state, item.eventId)

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
)(NotificationHistory)
