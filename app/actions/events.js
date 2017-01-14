import { map, times } from "lodash"
import { createNotification, deleteNotification } from "./notifications"
import { getUpcomingNotifications } from "../reducers/notifications"

export const createEvent = (name) => ({
  type: "CREATE_EVENT",
  createdAt: Date.now(),
  name: name
})

export const startEvent = (event) => (dispatch) => {
  const { interval, repeat } = event
  const timestamps = times(repeat || 1, i =>
    Date.now() + ((i + 1) * interval)
  )

  dispatch(stopEvent(event))

  map(timestamps, (timestamp) =>
    dispatch(
      createNotification(event.id, timestamp)
    )
  )
}

export const stopEvent = (event) => (dispatch, getState) => {
  const state = getState()
  const notifications = getUpcomingNotifications(state, event.id)

  map(notifications, (notification) => {
    dispatch(
      deleteNotification(notification)
    )
  })
}
