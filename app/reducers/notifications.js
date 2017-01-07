const notificationsReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_NOTIFICATION":
      return state.concat({
        createdAt: action.createdAt,
        name: action.name
      })
    default:
      return state
  }
}

export const getnotifications = (state) => state.notifications

export const getNotification = (state) => state.notifications[0]

export default notificationsReducer
