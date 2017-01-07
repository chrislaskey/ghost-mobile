import lib from "uuid"

export const shortUuid = () => {
  const id = lib.v4()
  const hyphen = id.indexOf("-")

  return id.substring(0, hyphen)
}

export const uuid = () => lib.v4()

export default uuid
