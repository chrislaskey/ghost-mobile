import React from "react"
import { connect } from "react-redux"
import { Text, View } from "react-native"
import { getEvent } from "../reducers/events"
import Page from "../layouts/Page"
import styles from "../styles"

// var PushNotification = require('react-native-push-notification')

// PushNotification.configure({

//     // (optional) Called when Token is generated (iOS and Android)
//     onRegister: function(token) {
//         console.log( 'TOKEN:', token );
//     },

//     // (required) Called when a remote or local notification is opened or received
//     onNotification: function(notification) {
//         console.log( 'NOTIFICATION:', notification );
//     },

//     // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications) 
//     senderID: "YOUR GCM SENDER ID",

//     // IOS ONLY (optional): default: all - Permissions to register.
//     permissions: {
//         alert: true,
//         badge: true,
//         sound: true
//     },

//     // Should the initial notification be popped automatically
//     // default: true
//     popInitialNotification: true,

//     /**
//       * (optional) default: true
//       * - Specified if permissions (ios) and token (android and ios) will requested or not,
//       * - if not, you must call PushNotificationsHandler.requestPermissions() later
//       */
//     requestPermissions: true,
// })

const Home = ({ event }) => {

	// PushNotification.localNotificationSchedule({
  	// message: "My Notification Message",
  	// date: new Date(Date.now() + (10 * 1000))
	// })

  return (
    <Page>
      <Text style={styles.text}>Home</Text>
    </Page>
  )
}

Home.displayName = "Home"

const mapStateToProps = (state) => ({
  event: getEvent(state)
})

const mapDispatchToProps = () => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
