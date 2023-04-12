import React, { useEffect, useState, useRef } from "react";
import {
	View,
	Button,
	TextInput,
	StyleSheet,
	Text,
	Switch,
	Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Device from "expo-device";
import * as Notification from "expo-notifications";
import { DayPicker } from "react-native-picker-weekday";
import DateTimePicker from "@react-native-community/datetimepicker";

// import { Button } from "@rneui/base";
// import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
// import DateTimePicker from '@react-native-community/datetimepicker';

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
	const [expoPushToken, setExpoPushToken] = useState("");

	const notificationListener = useRef();
	const responseListener = useRef();

	const [notifSettings, setNotifSettings] = useState("No Saved Settings");
	const [notifMessage, setNotifMessage] = useState("Read for 30 minutes");
	const [weekdays, setWeekdays] = React.useState([]);
	const [time, setTime] = useState(new Date(1598025600000));
	const [isEnabled, setIsEnabled] = useState(false);
	const [isEditingSettings, setIsEditingSettings] = useState(true);

	let daysOfTheWeek = new Map<number, string>([
		[1, "Sun"],
		[2, "Mon"],
		[3, "Tue"],
		[4, "Wed"],
		[5, "Thu"],
		[6, "Fri"],
		[7, "Sat"],
	]);

	// toggle switch changing state
	const toggleSwitch = () => {
		setIsEnabled((previousState) => !previousState);
		if (!isEnabled) {
			Notification.cancelAllScheduledNotificationsAsync();
		}
	};

	useEffect(() => {
		registerForPushNotificationsAsync().then((token) =>
			setExpoPushToken(token!)
		);

		notificationListener.current = Notification.addNotificationReceivedListener(
			(notification) => {
				console.log(notification);
			}
		);

		responseListener.current =
			Notification.addNotificationResponseReceivedListener((response) => {
				console.log(response);
			});

		return () => {
			Notification.removeNotificationSubscription(notificationListener.current);
			Notification.removeNotificationSubscription(responseListener.current);
		};
	}, []);

	function displayNotifSettings() {
		const ampm: string = time.getHours() < 12 ? "am" : "pm";
		const hours: string =
			time.getHours() % 12 < 1 ? "12" : String(time.getHours() % 12);
		const minutes: string =
			(time.getMinutes() < 10 ? "0" : "") + time.getMinutes();

		var daysAsString: string = "";
		if (weekdays.length == 7) {
			daysAsString = "Every Day";
		} else if (weekdays.length == 0) {
			// 	// toggleSwitch();
			setNotifSettings("No Saved Settings");
			return;
		} else {
			setWeekdays(weekdays.sort((n1, n2) => n1 - n2));
			daysAsString = weekdays
				.map((day) => {
					return String(daysOfTheWeek.get(day));
				})
				.join(", ");
		}
		const notifyString: string = `${notifMessage}\nNotify at ${hours}:${minutes} ${ampm}\n${daysAsString}`;
		setNotifSettings(notifyString);
	}

	const saveNotifChanges = () => {
		// Don't save changes if no days selected
		if (isEditingSettings && weekdays.length <= 0) {
			alert("Please select at least one day to schedule notifications");
			return;
		}

		// If you just saved changes, set notifications
		if (isEditingSettings) {
			schedulePushNotification();
			displayNotifSettings();
		// 	const newData = {
		// 		...data,

		// 	}
		}

		// change editing on button press
		setIsEditingSettings((previousState) => !previousState);
	};

	async function schedulePushNotification() {
		// cancels all previous notifications
		await Notification.cancelAllScheduledNotificationsAsync();

		// schedules notification for each weekday selected
		weekdays
			// .filter((v) => v > 0)
			.forEach((day) => {
				Notification.scheduleNotificationAsync({
					content: {
						title: "ReMo",
						body: notifMessage,
						// data: { data: 'goes here' },
					},
					trigger: {
						// WeeklyTriggerInput
						hour: time.getHours(),
						minute: time.getMinutes(),
						repeats: true,
						weekday: day,
					},
				});
			});
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}> Reminder Notifications</Text>
			{/* <Text></Text> */}
			
			<View style={styles.reminderBox}>
				<Text style={{ marginTop: 20, marginLeft: 10 }}>Toggle On/Off</Text>
				<Switch
					style={{ marginTop: -20, marginBottom: 5, marginLeft: 275 }}
					trackColor={{ false: "#CECECE", true: "#65298B" }}
					thumbColor={isEnabled ? "#E9E9E9" : "#f4f3f4"}
					ios_backgroundColor="#CECECE"
					onValueChange={toggleSwitch}
					value={isEnabled}
				/>

				{/* Shows components if switch is enabled */}
				{isEnabled &&
					((isEditingSettings && (
						<View>
							<TextInput
								style={styles.textInput}
								onChangeText={(input) => {
									if (input.length > 0) {
										setNotifMessage(input);
									} else {
										setNotifMessage("Read for 30 minutes");
									}
								}}
								keyboardType="default"
								autoCapitalize="none"
								placeholder={
									notifMessage.length > 0 ? notifMessage : "Read for 30 minutes"
								}
								autoCorrect={false}
								defaultValue={
									notifMessage == "Read for 30 minutes"
										? undefined
										: notifMessage.length > 0
										? notifMessage
										: undefined
								}
							/>

							<DayPicker
								weekdays={weekdays}
								setWeekdays={setWeekdays}
								activeColor="violet"
								textColor="white"
								inactiveColor="grey"
								dayTextStyle={
									{
										/*All styles applicable to text component*/
									}
								} //(optional for high styling flexiblity)
								itemStyles={
									{
										/*All Styles applicable to View component*/
									}
								} //(optional for high styling flexiblity)
								wrapperStyles={
									{
										/*All Styles applicable to View component*/
									}
								} // (optional for high styling flexiblity)
							/>
							{/* x         <Text>selected: {time.toLocaleString()}</Text> */}

							<DateTimePicker
								// style={}
								testID="dateTimePicker"
								value={time}
								mode="time"
								is24Hour={true}
								onChange={(stuff, date) => {
									setTime(date!);
									console.log(
										"Hour: " + date!.getHours(),
										"Minute:" + time.getMinutes()
									);
								}} // display="inline"
							/>
						</View>)) ||
						(!isEditingSettings && (
						<Text style={styles.text}>{notifSettings}</Text>
						)))}

				{/* Editing notif settings or after saving notif settings */}
				{isEnabled && (
					<Button //style={undefined}
						onPress={saveNotifChanges}
						title={isEditingSettings ? "save changes" : "edit notifications"} //"save changes"
						// activeOpacity = {0}
						color="#84158488"
						accessibilityLabel="Save Notification Changes"
					/>
				)}
			</View>
		</View>
	);
};

export default Notifications;

async function registerForPushNotificationsAsync() /*: Promise<string | null> */ {
	// notifications only work on physical devices
	if (!Device.isDevice) {
		alert(
			"Must use physical device for Push Notifications. Must be ios or android."
		);
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
	console.log("ExpoPushToken: ", token);

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
		font_family: "Open Sans",
		font_style: "normal",
		font_weight: "400",
		font_size: "14",
		line_height: "150%",
		/* or 21px */
		letter_spacing: " -0.019em",
		marginTop: 20,
		marginLeft: 10,
		color: "#000000",
		marginBottom: 50,
	},
	textInput: {
		borderRadius: 10,
		borderWidth: 0.5,
		backgroundColor: "#f2f2f2",
		padding: 10,
		width: 200,
		textAlign: "center",
		marginVertical: 7,
		alignSelf: "center",
		marginTop: 10,
	},
	text: {
		// backgroundColor: "#f2f2f2",
		padding: 5,
		width: 250,
		textAlign: "center",
		marginVertical: 7,
		alignSelf: "center",
		marginTop: 10,
	},
	reminderBox: {
		backgroundColor: "#fff",
		borderRadius: 20,
		padding: 5,
		shadowColor: "#000",
		marginTop: 50,
		marginStart: 10,
		marginEnd: 10,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},

	// roundButton: {
	//   width: 100,
	//   height: 100,
	//   justifyContent: 'center',
	//   alignItems: 'center',
	//   padding: 0,
	//   borderRadius: 100,
	//   opacity: 100
	//   // backgroundColor: 'orange',
	// },
	// roundButton2: {
	//   marginTop: 20,
	//   width: 150,
	//   height: 150,
	//   justifyContent: 'center',
	//   alignItems: 'center',
	//   padding: 10,
	//   borderRadius: 100,
	//   backgroundColor: '#ccc',
	// },
});
