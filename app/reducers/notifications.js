import { find, filter, omit } from "lodash"

const notificationsReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_NOTIFICATION":
      return {...state, [action.key]: action.value}
    case "DELETE_NOTIFICATION":
      return omit(state, action.id)
    default:
      return state
  }
}

export const getNotification = (state, id) => (
  find(state.notifications, {"id": id}) || {}
)

export const getNotifications = (state, eventId) => {
  const items = state.notifications

  return eventId ? filter(items, {"eventId": eventId}) : items
}

export const getUpcomingNotifications = (state, eventId) => {
  const notifications = getNotifications(state, eventId)
  const now = Date.now()

  return filter(notifications, (item) =>
    item.timestamp > now
  )
}

export const getPastNotifications = (state, eventId) => {
  const notifications = getNotifications(state, eventId)
  const now = Date.now()

  return filter(notifications, (item) =>
    item.timestamp <= now
  )
}

export default notificationsReducer
