import React from "react"
import { Text, View } from "react-native"
import TitleBar from "../components/TitleBar"
import styles from "../styles"

const Page = ({children}) => (
  <View style={styles.pageContainer}>
    <TitleBar />
    <View style={styles.pageContent}>
      {children}
    </View>
  </View>
)

Page.displayName = "Page"

export default Page
