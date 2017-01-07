export const createNotification = (eventId, time) => {
  // const PushNotification = require("../app/PushNotification").default

	// PushNotification.localNotificationSchedule({
  	// message: "My Notification Message",
  	// date: new Date(Date.now() + (5 * 1000))
	// })

  return {
    type: "CREATE_NOTIFICATION",
    eventId,
    time
  }
}
