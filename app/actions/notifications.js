export const createNotification = (eventId, timestamp) => {
  // const PushNotification = require("../app/PushNotification").default

  // const notification = PushNotification.localNotificationSchedule({
  //   message: "My Notification Message",
  //   date: new Date(Date.now() + (5 * 1000))
  // })

  return {
    type: "CREATE_NOTIFICATION",
    eventId,
    // id
    // notification,
    timestamp
  }
}

export const deleteNotification = (notification) => (
  // const PushNotification = require("../app/PushNotification").default

  // TODO: need to determine notification id so it can be passed:
  // https://github.com/zo0r/react-native-push-notification#1-cancellocalnotifications
  // PushNotification.cancelLocalNotifications({
  //   id: notification.notification.id
  // })

  return {
    type: "DELETE_NOTIFICATION",
    id: notification.id
  }
)
