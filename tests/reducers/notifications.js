import reducer from "../../app/reducers/notifications"

describe("reducer", () => {
  it("initial state", () => {
    expect(
			reducer(undefined, {})
		).toEqual(
			{}
		)
  })

  it("action type CREATE_NOTIFICATION", () => {
    const key = "test-id"
    const value = {
      name: "test name"
    }

    // Empty state
    expect(
      reducer({}, {
        type: "CREATE_NOTIFICATION",
        key,
        value
      })
    ).toEqual({
      [key]: value
    })

    // Updating existing key
    expect(
      reducer({
        [key]: { old: "value" }
      }, {
        type: "CREATE_NOTIFICATION",
        key,
        value
      })
    ).toEqual({
      [key]: value
    })
  })

  it("action type DELETE_NOTIFICATION", () => {
    const id = "test-id"

    // Empty state
    expect(
      reducer({}, {
        type: "DELETE_NOTIFICATION",
        id,
      })
    ).toEqual(
      {}
    )

    // Updating existing key
    expect(
      reducer({
        [id]: "existing value"
      }, {
        type: "DELETE_NOTIFICATION",
        id,
      })
    ).toEqual(
      {}
    )
  })
})
