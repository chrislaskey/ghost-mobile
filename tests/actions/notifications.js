import * as actions from "../../app/actions/notifications"

describe("actions", () => {
  describe("createNotification", () => {
    let inputs = {}
    let result

    beforeEach(() => {
      inputs.eventId = "1"
      inputs.timestamp = Date.now()

      result = actions.createNotification(
        inputs.eventId,
        inputs.timestamp
      )
    })

    it("result type", () => {
      expect(result.type).toEqual("CREATE_NOTIFICATION")
    })

    it("result key", () => {
      expect(result.key).toBeDefined()
      expect(result.key.length).toEqual(8)
    })

    it("result value", () => {
      expect(typeof(result.value)).toEqual("object")
      expect(result.value.id).toEqual(result.key)
      expect(result.value.eventId).toEqual(inputs.eventId)
      expect(result.value.timestamp).toEqual(inputs.timestamp)
    })
  })

  describe("deleteNotification", () => {
    let inputs = {}
    let result

    beforeEach(() => {
      inputs.notification = {
        id: "test"
      }

      result = actions.deleteNotification(
        inputs.notification
      )
    })

    it("result type", () => {
      expect(result.type).toEqual("DELETE_NOTIFICATION")
    })

    it("result id", () => {
      expect(result.id).toEqual(inputs.notification.id)
    })
  })
})
