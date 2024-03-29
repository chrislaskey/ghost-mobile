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

const navigation = {
  navigationOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: 2000
  },
  navigation: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    top: 0,
    right: 0,
    width: Math.round(fullWidth * 0.8),
    paddingTop: 30,
    zIndex: 2500,
  },
  navigationItem: {
    height: 50,
  },
  navigationItemActive: {
    backgroundColor: "#aaa",
    height: 50,
  },
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

const eventForm = {
  eventFormInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 300
  }
}

const styles = StyleSheet.create(
  merge(
    {},
    layout,
    navigation,
    titleBar,
    eventForm
  )
)

export default styles
