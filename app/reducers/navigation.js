const navigationReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_NAVIGATION":
      return true
    case "CLOSE_NAVIGATION":
      return false
    default:
      return state
  }
}

export const isNavigationOpen = (state) => state.navigation

export default navigationReducer
