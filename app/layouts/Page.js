import React from "react"
import { Text, View } from "react-native"
import styles from "../styles"

const Page = ({children}) => (
  <View style={styles.pageContainer}>
    <View style={styles.pageContent}>
      {children}
    </View>
  </View>
)

Page.displayName = "Page"

export default Page
