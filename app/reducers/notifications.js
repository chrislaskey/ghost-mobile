const notificationsReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_NOTIFICATION":
      return state.concat({
        createdAt: action.createdAt,
        name: action.name
      })
    case "DELETE_NOTIFICATION":
      // TODO: omit notification by ID
      return state
    default:
      return state
  }
}

// TODO
export const getNotification = (state, id) => {}

// TODO
export const getActiveNotifications = (state) => []

// TODO
export const getNotificationsByEventId = (state, eventId) => []

// TODO
export const getActiveNotificationsByEventId = (state, eventId) => []

export default notificationsReducer
