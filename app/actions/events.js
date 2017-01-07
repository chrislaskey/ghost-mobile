import createNotification from "./notifications"

export const addEvent = (name) => ({
  type: "ADD_EVENT",
  createdAt: Date.now(),
  name: name
})

export const startEvent = (event) => (dispatch, getState) => {
  console.log("start!")

  return {type: "NOOP"}
}

export const stopEvent = (event) =>  (dispatch, getState) => {
  console.log("stop!")

  return {type: "NOOP"}
}
