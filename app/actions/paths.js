export const updatePath = (path) => ({
  type: "UPDATE_PATH",
  path: path,
  timestamp: Date.now()
})

export const deletePath = () => ({
  type: "DELETE_PATH"
})
