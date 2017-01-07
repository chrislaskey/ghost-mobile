import { map, times } from "lodash"
import { createNotification } from "./notifications"
import { getActiveNotificationsByEventId } from "../reducers/notifications"

export const addEvent = (name) => ({
  type: "ADD_EVENT",
  createdAt: Date.now(),
  name: name
})

export const startEvent = (event) => (dispatch) => {
  const { interval, repeat } = event
  const timestamps = times(repeat || 1, i =>
    Date.now() + (i * interval)
  )

  dispatch(stopEvent(event))

  map(timestamps, (timestamp) =>
    dispatch(
      createNotification(event.id, timestamp)
    )
  )
}

export const stopEvent = (event) =>  (dispatch, getState) => {
  const state = getState()
  const notifications = getActiveNotificationsByEventId(state, eventId)

  map(notifications, (notification) => {
    dispatch(
      deleteNotification(notification)
    )
  })
}
