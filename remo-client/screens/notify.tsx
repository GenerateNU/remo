import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, StyleSheet, Switch} from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});


export default function Notify(msgBody: String) {
  const [NotificationEnabled, setNotificationEnabled] = useState(false);
  const toggleSwitch = () => setNotificationEnabled(previousState => !previousState);

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token!));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
      <View style={styles.container}>
        <View style={styles.switch}>
          <Text> Toggle On/Off </Text>
          <View style={styles.switch}>
            <Switch
              trackColor={{false: '#CECECE', true: '#65298B'}}
              thumbColor={NotificationEnabled ? '#E9E9E9' : '#f4f3f4'}
              ios_backgroundColor="#CECECE"
              onValueChange={toggleSwitch}
              value={NotificationEnabled}
            />
          </View>
        </View>
        {/* <Text> finish here </Text> */}
        <Button
          title="daily trigger"
          // hours, minutes, repeats
          onPress={async () => {const schedule:schedule = {hour: 16, minute: 39, repeats: false}; await schedulePushNotification("DAILY Notif", scheduleType.Daily, schedule);}}
        />

        <Button
          title="DATE trigger"
          // date
          onPress={async () => {const schedule:schedule = {date: Date.now() + 3000}; await schedulePushNotification("DATE Notif", scheduleType.Date, schedule);}}
        />

        <Button
          title="TIME INTERVAL trigger"
          // seconds, repeats
          onPress={async () => {const schedule:schedule = {seconds: 60, repeats: true}; await schedulePushNotification("INTERVAL Notif", scheduleType.Interval, schedule);}}
        />

        <Button
          title="WEEKLY trigger"
          // hour minute repeats weekday
          onPress={async () => {const schedule:schedule = {hour: 16, minute: 39, repeats: false, weekday: 3};
          console.log(schedule);
          await schedulePushNotification("WEEKLY Notif", scheduleType.Weekly, schedule);}}
        />


        <Button
          title="CANCEL ALL trigger"
          // hour minute repeats weekday
          onPress={async () => {const schedule:schedule = {hour: 16, minute: 39, repeats: false, weekday: 3};
          console.log(schedule);
          await Notifications.cancelAllScheduledNotificationsAsync();}}
        />
     
      </View>

    /*{ <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification("hi");
        }}
      />
    </View> }*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  switch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface schedule{
  repeats?: boolean, 
  hour?: number,
  minute?: number, 
  seconds?: number, 
  date?: Date | number,
  weekday?: number,
}

enum scheduleType {
  Daily,
  Weekly,
  Date,
  Interval,
}

async function schedulePushNotification(msg: string, type: scheduleType, schedule: schedule) {
  let trigger:any = {}
  if (type == scheduleType.Daily) {
    trigger = {
      hour: schedule.hour, 
      minute: schedule.minute,
      repeats: schedule.repeats
    }
  }
  else if (type == scheduleType.Weekly) {
    trigger = {
      hour: schedule.hour, 
      minute: schedule.minute,
      repeats: schedule.repeats,
      weekday: schedule.weekday
    }
  }
  else if (type == scheduleType.Interval) {
    trigger = {
      repeats: schedule.repeats,
      seconds: schedule.seconds,
    }
  } 
  else if (type == scheduleType.Date) {
    trigger = schedule.date
  } 
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: msg,
      data: { data: 'goes here' },
    },
    trigger: trigger
  });
}
export {schedulePushNotification};

async function sendPushNotification(expoPushToken: string) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

export {sendPushNotification};


// registers for push notifications with expo
async function registerForPushNotificationsAsync()/*: Promise<string | null> */{
  // notifications only work on physical devices
  if (!Device.isDevice) {
    alert("Must use physical device for Push Notifications. Must be ios or android.");
    return null;
  }

  // ask user for notification permissions
  const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
    alert("Failed to get push token for push notification!");
    return null;
  }

  // android needs notification channel with highest importance so notificaiton goes through always
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      // other notification settings that are customizable
      // vibrationPattern: [0, 250, 250, 250],
      // lightColor: '#FF231F7C',
    });
  }

  // gets push notification token
  const token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log("ExpoPushToken: ", token)

  return token;
}


// async function registerForPushNotificationsAsync() {

//   let token;

//   if (Platform.OS === 'android') {
//     await Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   if (Device.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log(token);
//   } else {
//     alert('Must use physical device for Push Notifications');
//   }

//   return token;
// }