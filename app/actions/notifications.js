import { shortUuid } from "../helpers/uuid"

export const createNotification = (eventId, timestamp) => {
  const id = shortUuid()
  const PushNotification = require("../app/PushNotification").default
  const notification = PushNotification.localNotificationSchedule({
    date: new Date(timestamp),
    message: "My Notification Message",
    userInfo: { id: id }
  })

  const item = {
    id,
    eventId,
    notification,
    timestamp
  }

  return {
    type: "CREATE_NOTIFICATION",
    key: id,
    value: item
  }
}

export const deleteNotification = (notification) => {
  const PushNotification = require("../app/PushNotification").default

  // TODO: need to determine notification id so it can be passed:
  // https://github.com/zo0r/react-native-push-notification#1-cancellocalnotifications
  // TODO: Confirm cancelling works. If not, see
  // https://www.bountysource.com/issues/39723002-pushnotification-cancellocalnotifications-broken
  PushNotification.cancelLocalNotifications({
    id: notification.id
  })

  return {
    type: "DELETE_NOTIFICATION",
    id: notification.id
  }
}
