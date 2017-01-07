import reducer from "../../app/reducers/events"

describe("reducer", () => {
  it("initial state", () => {
    expect(
			reducer(undefined, {})
		).toEqual(
			[]
		)
  })

  it("action type CREATE_EVENT", () => {
    const createdAt = Date.now()
    const name = "test name"

    expect(
      reducer([], {
        type: "CREATE_EVENT",
        createdAt,
        name
      })
    ).toEqual([
      { createdAt, name }
    ])
  })
})
