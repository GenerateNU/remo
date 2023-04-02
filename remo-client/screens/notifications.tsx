import React, { useEffect, useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Text, Switch, Platform} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as Device from 'expo-device'
import * as Notification from 'expo-notifications';
import {
    useRoute
  } from "@react-navigation/native";

Notification.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});


const Notifications = () => {
    const route = useRoute();
    const data = route.params?.data;
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const [notifMessage, setNotifMessage] = useState("Time to Read!");
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notifTime, setNotifTime] = useState({hour: 12, minute: 0})
    const [notifDays, setNotifDays] = useState(new Set())
    // const notificationListener = useRef();
    // const responseListener = useRef();


    // toggle switch changing state
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
      registerForPushNotificationsAsync().then(token => setExpoPushToken(token!));

      // notificationListener.current = Notification.addNotificationReceivedListener(notification => {
      //   setNotification(notification);
      // });
  
      // responseListener.current = Notification.addNotificationResponseReceivedListener(response => {
      //   console.log(response);
      // });
  
      // return () => {
      //   Notifications.removeNotificationSubscription(notificationListener.current);
      //   Notifications.removeNotificationSubscription(responseListener.current);
      // };

    }, []);
    
    async function schedulePushNotification() {
  
      // if (type == scheduleType.Weekly) {
      //   trigger = {
          // hour: schedule.hour, 
          // minute: schedule.minute,
          // repeats: schedule.repeats,
          // weekday: schedule.weekday
      //   }
      // }
      await Notification.scheduleNotificationAsync({
        content: {
          title: "ReMo",
          body: notifMessage,
          // data: { data: 'goes here' },
        },
        trigger: {
          hour: notifTime.hour, 
          minute: schedule.minute,
          repeats: true,
          weekday: schedule.weekday
        }
      });
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Reminder Notifications </Text>
      <Text></Text>
      <View style={{
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 5,
      shadowColor: '#000',
      marginTop: 50,
      marginStart: 10,
      marginEnd: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    }}>
        <Text style={{marginTop:20, marginLeft: 10}}>Toggle On/Off</Text>
        <Switch
        trackColor={{false: '#CECECE', true: '#65298B'}}
        thumbColor={isEnabled ? '#E9E9E9' : '#f4f3f4'}
        ios_backgroundColor="#CECECE"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ marginTop: -20, marginBottom:5, marginLeft: 275}}
        />
      <TextInput
        onChangeText={setNotifMessage}
        keyboardType="default"
        autoCapitalize="none"
        placeholder='Read for 30 minutes'
        autoCorrect={false}
        style={styles.textInput}
      />    
      </View>

    </View>
  );
};

export default Notifications;

async function registerForPushNotificationsAsync()/*: Promise<string | null> */{
  // notifications only work on physical devices
  if (!Device.isDevice) {
    alert("Must use physical device for Push Notifications. Must be ios or android.");
    return null;
  }

  // ask user for notification permissions
  const { status } = await Notification.requestPermissionsAsync();
    if (status !== "granted") {
    alert("Failed to get push token for push notification!");
    return null;
  }

  // android needs notification channel with highest importance so notificaiton goes through always
  if (Platform.OS === "android") {
    Notification.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notification.AndroidImportance.MAX,
      // other notification settings that are customizable
      // vibrationPattern: [0, 250, 250, 250],
      // lightColor: '#FF231F7C',
    });
  }

  // gets push notification token
  const token = (await Notification.getExpoPushTokenAsync()).data;
  console.log("ExpoPushToken: ", token)

  return token;
}

// async function schedulePushNotification() {
  
//   // if (type == scheduleType.Weekly) {
//   //   trigger = {
//   //     hour: schedule.hour, 
//   //     minute: schedule.minute,
//   //     repeats: schedule.repeats,
//   //     weekday: schedule.weekday
//   //   }
//   // }
//   await Notification.scheduleNotificationAsync({
//     content: {
//       title: "You've got mail! 📬",
//       body: ,
//       data: { data: 'goes here' },
//     },
//     trigger: trigger
//   });
// }
// export {schedulePushNotification};









const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	title: {
        position: "absolute",
        font_family: 'Open Sans',
        font_style: "normal",
        font_weight: "400",
        font_size: "14",
        line_height: "150%",
        /* or 21px */
        letter_spacing:" -0.019em",
        marginTop: 20,
        marginLeft: 10,
        color: "#000000",
        marginBottom: 50
	},
    textInput: {
        borderRadius: 10,
        borderWidth: .5,
        backgroundColor: '#f2f2f2',
        padding: 10,
        width: 200,
        textAlign: 'center',
        marginVertical:7,
        alignSelf: 'center',
        marginTop:10,
      },
});
