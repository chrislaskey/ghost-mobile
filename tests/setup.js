jest.mock("react-native-push-notification", () => ({
  cancelLocalNotifications: jest.fn(),
  configure: jest.fn(),
  localNotificationSchedule: jest.fn(),
}))
