const pathsReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_PATH":
      return state.concat({
        path: action.path,
        timestamp: action.timestamp
      })
    default:
      return state
  }
}

export const getCurrentPath = (state) => {
  const paths = state.paths
  const latest = state.paths.length - 1

  return paths[latest] || {}
}

export default pathsReducer
