import * as actions from "../../app/actions/paths"

describe("actions", () => {
  describe("updatePath", () => {
    let inputs = {}
    let result

    beforeEach(() => {
      inputs.path = "test"

      result = actions.updatePath(
        inputs.path
      )
    })

    it("result type", () => {
      expect(result.type).toEqual("UPDATE_PATH")
    })

    it("result timestamp", () => {
      expect(result.timestamp).toBeDefined()
    })

    it("result path", () => {
      expect(result.path).toEqual(inputs.path)
    })
  })
})
