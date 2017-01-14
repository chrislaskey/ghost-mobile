import { map, merge, times } from "lodash"
import { createNotification, deleteNotification } from "./notifications"
import { getUpcomingNotifications } from "../reducers/notifications"
import { shortUuid } from "../helpers/uuid"

export const createEvent = (values) => {
  const id = shortUuid()

  return {
    type: "CREATE_EVENT",
    key: id,
    value: merge({}, values, {
      id: id,
      createdAt: Date.now(),
      updatedAt: Date.now()
    })
  }
}

export const updateEvent = (values) => ({
  type: "UPDATE_EVENT",
  key: values.id,
  value: merge({}, values, {
    updatedAt: Date.now()
  })
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
