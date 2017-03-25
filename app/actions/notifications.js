import { shortUuid } from "../helpers/uuid"

const scheduleInAppNotification = (dispatch, timestamp, message) => {
  const interval = timestamp - Date.now()
  const processingTime = 100
  const isActive = (now) => {
    console.log('now', now)
    console.log('limit', timestamp + processingTime)
    console.log('difference', now - limit)

    return now <= (timestamp + processingTime)
  }

  console.log("scheduling in app event in " + interval)

  return setTimeout(() => {
    if (isActive) {
      console.log("dispatching in-app event", {
        type: "IN_APP",
        message: message
      })
      // dispatch({
      //   type: "IN_APP_MESSAGE",
      //   message: message
      // })
    } else {
      console.log("not dispatching in-app event")
    }
  }, interval)
}

export const createNotification = (eventId, timestamp) => (dispatch) => {
  const id = shortUuid()
  const message = "My Notification Message"
  // const PushNotification = require("../app/pushNotification").default
  const inAppNotification = scheduleInAppNotification(
    dispatch, timestamp, message
  )

  // PushNotification.localNotificationSchedule({
  //   date: new Date(timestamp),
  //   message: message,
  //   userInfo: { id: id }
  // })

  const item = {
    id,
    eventId,
    inAppNotification,
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

  clearTimeout(notification.inAppNotification)

  return {
    type: "DELETE_NOTIFICATION",
    id: notification.id
  }
}
