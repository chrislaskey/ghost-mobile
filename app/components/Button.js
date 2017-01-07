import React from "react"
import { Text, TouchableHighlight, View } from "react-native"
import styles from "../styles"

const Button = ({ children, onPress, text }) => (
  <TouchableHighlight onPress={ onPress }>
    <View style={ styles.button }>
      { children }
      { text && <Text style={ styles.text }>{ text }</Text> }
    </View>
  </TouchableHighlight>
)

Button.displayName = "Button"

export default Button
