import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, Platform, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";
import AfterSSO from "./afterSSO";
import { FontAwesome5 } from '@expo/vector-icons'
import jwt_decode from 'jwt-decode'
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'
import {schedulePushNotification} from './notify'

// Notifications.setNotificationHandler({
// 	handleNotification: async () => ({
// 	  shouldShowAlert: true,
// 	  shouldPlaySound: true,
// 	  shouldSetBadge: true,
// 	}),
//   });


export default function GoogleSSO() {
	const [msg, setMsg] = useState('');	
	const [delay, setDelay] = useState('2');	
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.goBack();
  };

	
  useEffect(() => {
	sendToBackend();

	// registerForPushNotificationsAsync().then(token=>console.log(token)).catch(err=>console.log("error:" + err))
});


//   // Can use this function below OR use Expo's Push Notification Tool from: https://expo.dev/notifications
//   async function sendPushNotification(expoPushToken: String) {
// 	const message = {
// 	  to: expoPushToken,
// 	  sound: 'default',
// 	  title: 'Original Title',
// 	  body: 'And here is the body!',
// 	  data: { someData: 'goes here' },
// 	};
  
// 	await fetch('https://exp.host/--/api/v2/push/send', {
// 	  method: 'POST',
// 	  headers: {
// 		Accept: 'application/json',
// 		'Accept-encoding': 'gzip, deflate',
// 		'Content-Type': 'application/json',
// 	  },
// 	  body: JSON.stringify(message),
// 	});
//   }
  
//   async function registerForPushNotificationsAsync() {
// 	let token;
// 	if (Device.isDevice) {
// 	  const { status: existingStatus } = await Notifications.getPermissionsAsync();
// 	  let finalStatus = existingStatus;
// 	  if (existingStatus !== 'granted') {
// 		const { status } = await Notifications.requestPermissionsAsync();
// 		finalStatus = status;
// 	  }
// 	  if (finalStatus !== 'granted') {
// 		alert('Failed to get push token for push notification!');
// 		return;
// 	  }
// 	  token = (await Notifications.getExpoPushTokenAsync()).data;
// 	  console.log(token);
// 	} else {
// 	  alert('Must use physical device for Push Notifications');
// 	}
  
// 	if (Platform.OS === 'android') {
// 	  Notifications.setNotificationChannelAsync('default', {
// 		name: 'default',
// 		importance: Notifications.AndroidImportance.MAX,
// 		vibrationPattern: [0, 250, 250, 250],
// 		lightColor: '#FF231F7C',
// 	  });
// 	}
  
// 	return token;
//   }




  //-----------------------------------------------------------------------

	const [request, response, promptAsync] = Google.useAuthRequest({
		// redirectUri: "localhost:8080",
		scopes: [
			"email",
			"profile",
			"openid",
			"https://www.googleapis.com/auth/userinfo.profile",
			"https://www.googleapis.com/auth/userinfo.email",
		],
		expoClientId:
			"146112178699-kj35h882rr6711tflocnoodhquqtcv0f.apps.googleusercontent.com", //get this from google console
		// iosClientId: 'can obtain once we have bundle id for ios app',
		// androidClientId: 'can obtain once register android app',
		webClientId:
			"146112178699-kj35h882rr6711tflocnoodhquqtcv0f.apps.googleusercontent.com",
		clientSecret: "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",
	});


	
	 
	interface GoogleData {
		first: string;
		last: string;
		pic_url: string;
	  }

	var doneWithAuth = false;

	const sendToBackend = async () => {
		if (response?.type === "success" && doneWithAuth === false) {
			doneWithAuth = true;
			const { authentication } = response;
			// an access token and id token will be returned in the authentication object
			console.log(authentication?.idToken);
			
	
			console.log("woohoo");
		
		try {
			// console.log("hello")
			var res = await fetch(
				"https://0385-155-33-133-32.ngrok.io/v1/login", {
					method: "POST",
					credentials: "include",
					headers: {
						'Content-Type': 'application/json',
					  },
					body: JSON.stringify({credential: authentication?.idToken}),
				  })

				var text = await res.text();
				console.log("RESPONSE", text)

				const decodedHeader = jwt_decode(text);
				console.log(decodedHeader)
				const googdata = {
					// Credential: decodedHeader.Credential,
					email: decodedHeader.Email,
					firstName: decodedHeader.FirstName,
					lastName: decodedHeader.LastName,
					image: decodedHeader.Picture,
					id: decodedHeader.ID,
				}

				// NAVIGATE TO NEXT PAGE
				navigation.navigate("Onboarding", {
					data: googdata
				})
				} catch (error) {
					console.error(error);
				}
			}
		};


	
 	return (
    <View style={styles.container}>
      <Image
        style={{ width: 180, resizeMode: "contain" }}
        source={require("../public/Remo-Logo.png")}
      />

      <FontAwesome5.Button
        style={styles.googleButton}
        name="google"
        onPress={() => promptAsync()}
        //any other customization you want, like borderRadius, color, or size
      >
        <Text style={styles.googleText}>Log In With Google</Text>
      </FontAwesome5.Button>
	<View  style={{height: 40}}>
		<TextInput
			onChangeText={(text) => setMsg(text)}
			placeholder={"Type push notification here..."}
			style={styles.input}
			value={msg}
		/>
	</View>
	  <View style={styles.input}>
                  <TextInput
				  	keyboardType = 'numeric'
                    onChangeText={(number) => setDelay(number)}
                    placeholder={"Type delay of notification here..."}
                    style={styles.input}
                    value={''}
                  />
                </View>
	  <Button
         onPress = {() => schedulePushNotification(msg)}
         title = "Schedule Notification"
         color = "red"
      />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: 'column'
	},
	display: {
		position: "relative",
		top: 0,
		left: 0,
	},
	googleText: {
		color: "white",
	},
	googleButton: {
		width: 180,
		backgroundColor: "#F15a23",
	},
	textInput: {
		flex: 1,
		flexDirection: "row",
	  },
	input: {
		fontSize: 14,
		paddingLeft: 6,
		paddingTop: 2,
		width: "100%",
		paddingBottom: 2,
		borderColor: "black",
		borderWidth: 1,
	  },
});
