import { shortUuid } from "../helpers/uuid"

export const createNotification = (eventId, timestamp) => {
  const id = shortUuid()
  const PushNotification = require("../app/pushNotification").default
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
  const PushNotification = require("../app/pushNotification").default

  PushNotification.cancelLocalNotifications({
    id: notification.id
  })

  return {
    type: "DELETE_NOTIFICATION",
    id: notification.id
  }
}
