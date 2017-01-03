const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return state.concat({
        createdAt: action.createdAt,
        name: action.name
      })
    default:
      return state
  }
}

export const getEvents = (state) => state.events

export const getEvent = (state) => state.events[0]

export default eventsReducer
