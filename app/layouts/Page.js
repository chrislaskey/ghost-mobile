import React from "react"
import { Text, View } from "react-native"
import Navigation from "../components/Navigation"
import TitleBar from "../components/TitleBar"
import styles from "../styles"

// let interval

const Page = ({children}) => {
  // console.log("start!")
  // setTimeout(() => {
  //   console.log("delayed!")
  // }, 20 * 1000)

  // if (!interval) {
  //   interval = setInterval(() => {
  //     console.log(Date.now())
  //   }, 1000)
  // }

  // const inAppNotification = (notification) => {
  //   const title = Date.now()
  //   const delay = 5000
  //   const lastCheck = Date.now()
  //   const processingTime = 100

  //   const isActive = (last, now) => (
  //     now <= (last + delay + processingTime)
  //   )

  //   console.log(title + " Start")

  //   interval = setTimeout(() => {
  //     if (isActive(lastCheck, Date.now())) {
  //       console.log(title + " Stop")
  //     }

  //     lastCheck = Date.now()
  //   }, delay)
  // }

  // if (!interval) {
  //   const title = Date.now()
  //   const delay = 5000
  //   const lastCheck = Date.now()
  //   const processingTime = 100

  //   const isActive = (last, now) => (
  //     now <= (last + delay + processingTime)
  //   )

  //   console.log(title + " Start")

  //   interval = setTimeout(() => {
  //     if (isActive(lastCheck, Date.now())) {
  //       console.log(title + " Stop")
  //     }

  //     lastCheck = Date.now()
  //   }, delay)
  // }

  return (
    <View style={styles.pageContainer}>
      <Navigation />
      <TitleBar />
      <View style={styles.pageContent}>
        {children}
      </View>
    </View>
  )
}

Page.displayName = "Page"

export default Page
