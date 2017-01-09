import { Dimensions, StyleSheet } from "react-native"
import { merge } from "lodash"

const fullHeight = Dimensions.get("window").height
const fullWidth = Dimensions.get("window").width

const layout = {
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  pageContent: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181818",
  },
  button: {
    marginBottom: 30,
    marginTop: 30,
  },
  text: {
    color: "#fff",
  }
}

const titleBar = {
  titleBar: {
    backgroundColor: "#000",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  title: {

  }
}

const styles = StyleSheet.create(
  merge(
    {},
    layout,
    titleBar
  )
)

export default styles
