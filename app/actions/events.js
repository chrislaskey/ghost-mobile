import createNotification from "./notifications"

export const addEvent = (name) => ({
  type: "ADD_EVENT",
  createdAt: Date.now(),
  name: name
})

export const startEvent = (event) => {
  console.log("start!")

  return {type: "NOOP"}
}

export const stopEvent = (event) => {
  console.log("stop!")

  return {type: "NOOP"}
}
