import React from "react"
import { Text, View } from "react-native"
import Button from "./Button"
import styles from "../styles"

const TitleBar = () => {
  return (
    <View style={ styles.titleBar }>
      <Button>
        <Text style={ styles.text }>Menu</Text>
      </Button>
      <Text style={ styles.text }>Ghost</Text>
      <Button>
        <Text style={ styles.text }>+</Text>
      </Button>
    </View>
  )
}

TitleBar.displayName = "TitleBar"

export default TitleBar
