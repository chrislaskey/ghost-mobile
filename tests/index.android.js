import "react-native"
import React from "react"
import Index from "../index.android.js"
import renderer from "react-test-renderer"

it("renders correctly", () => {
  const tree = renderer.create(
    <Index />
  )
})
