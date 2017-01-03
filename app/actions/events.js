export const addEvent = (name) => ({
  type: "ADD_EVENT",
  createdAt: Date.now(),
  name: name
})
