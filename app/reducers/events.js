import { keys } from "lodash"

const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_EVENT":
    case "UPDATE_EVENT":
      return {...state, [action.key]: action.value}
    default:
      return state
  }
}

export const getEvents = (state) => state.events

export const getEvent = (state, id) => state.events[id] || {}

export const getFirstEvent = (state) => {
  const first = keys(state.events)[0]

  return state.events[first]
}

export default eventsReducer
