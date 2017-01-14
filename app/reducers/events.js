import { values } from "lodash"

const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_EVENT":
    case "UPDATE_EVENT":
      return {...state, [action.key]: action.value}
    default:
      return state
  }
}

export const getEvents = (state) => values(state.events)

export const getEvent = (state, id) => state.events[id] || {}

export default eventsReducer
