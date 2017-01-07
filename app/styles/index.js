import { Dimensions, StyleSheet } from "react-native"

const fullHeight = Dimensions.get("window").height
const fullWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
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
})

export default styles
