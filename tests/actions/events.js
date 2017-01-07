import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import * as actions from "../../app/actions/events"

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe("actions", () => {
  describe("createEvent", () => {
    let inputs = {}
    let result

    beforeEach(() => {
      inputs.name = "test"

      result = actions.createEvent(
        inputs.name
      )
    })

    it("result type", () => {
      expect(result.type).toEqual("CREATE_EVENT")
    })

    it("result createdAt", () => {
      expect(result.createdAt).toBeDefined()
    })

    it("result name", () => {
      expect(result.name).toEqual(inputs.name)
    })
  })

  describe("startEvent", () => {
    let inputs = {}
    let dispatch
    let result

    beforeEach(() => {
      inputs.event = {
        interval: 1000 * 60,
        repeat: 3
      }

      dispatch = jest.fn()

    	result = actions.startEvent(inputs.event)(dispatch)
    })

    it("calls stopEvent once and createNotifications for each event.repeat number", () => {
      const calls = dispatch.mock.instances.length
      const expected = 1 + inputs.event.repeat

      expect(calls).toEqual(expected)
    })
  })

  describe("stopEvent", () => {
    let inputs = {}
    let result

    beforeEach(() => {
      inputs.event = {
        id: "test-id",
        interval: 1000 * 60,
        repeat: 3
      }

      initialState = {
        notifications: {
          one: {
            eventId: inputs.event.id
          },
          two: {
            eventId: inputs.event.id
          }
        }
      }

      dispatch = jest.fn()
      getState = jest.fn(() => initialState)

    	result = actions.stopEvent(inputs.event)(dispatch, getState)
    })
  })
})
