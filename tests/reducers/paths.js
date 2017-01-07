import reducer from "../../app/reducers/paths"

describe("reducer", () => {
  it("initial state", () => {
    expect(
			reducer(undefined, {})
		).toEqual(
			[]
		)
  })

  it("action type UPDATE_PATH", () => {
    const path = "/test/path"
    const timestamp = Date.now()

    expect(
      reducer([], {
        type: "UPDATE_PATH",
        path,
        timestamp
      })
    ).toEqual([
      { path, timestamp }
    ])
  })
})
