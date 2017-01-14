import React from "react"
import { connect } from "react-redux"
import { ListView, Text, View } from "react-native"
import { isEmpty } from "lodash"
import { getEvent } from "../reducers/events"
import { getPastNotifications } from "../reducers/notifications"
import styles from "../styles"
import Page from "../layouts/Page"
// import Button from "../components/Button"

const History = ({ notifications, lookupRelatedEvent }) => {
  const heading = (
    <Text style={ styles.text }>History</Text>
  )

  if (isEmpty(notifications)) {
    return (
      <Page>
        { heading }
        <Text style={ styles.text }>
          No past notifications
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

History.displayName = "History"

const mapStateToProps = (state) => {
  const notifications = getPastNotifications(state)
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
)(History)
