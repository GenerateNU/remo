import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";
import AfterSSO from "./afterSSO";
// import CookieManager from '@react-native-cookies/cookies';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { SocialIcon } from 'react-native-elements'
// import GoogleButton from 'react-google-button'
import { FontAwesome5 } from '@expo/vector-icons'
import jwt_decode from 'jwt-decode'


// import * as WebBrowser from 'expo-web-browser';
// import { GoogleRectangularButton } from "../../../common/GoogleButton";


export default function GoogleSSO() {

  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.goBack();
  };

	// const pressHandler = () => {
	// 	// navigation.goBack();
	// };

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

	const [googleData, setGoogleData] = useState({
		first: "",
		last: "",
		pic_url: "",
	  })

	useEffect(() => {
		sendToBackend();
	});

	// const RouteNextPage = () => {
	// 	// NAVIGATE HERE
	// 	// PUT DATA HERE
		
	//   };
	 
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
			if (authentication?.idToken != null) {
				const decodedHeader = jwt_decode(authentication.idToken);
				// const data = new GoogleData();
				// const data: GoogleData = {
				// 	first: decodedHeader.given_name,
				// 	last: decodedHeader.family_name,
				// 	pic_url: decodedHeader.picture
				// }
				// setGoogleData({
				// 	first: decodedHeader.given_name,
				// 	last: decodedHeader.family_name,
				// 	pic_url: decodedHeader.picture
				// })
				// console.log(googleData)
				navigation.navigate("BarcodeScanner", {
					data: {
						email: decodedHeader.email,
						first: decodedHeader.given_name,
						last: decodedHeader.family_name,
						pic_url: decodedHeader.picture
					}
				})
				// setGoogleData()
   				// const pic = decodedHeader.picture
   				// const first_name = decodedHeader.given_name
   				// const last_name = decodedHeader.family_name
			}
			// if authentication?.idToken
			

			// pressHandler()
			


			
			// , {
			// 	idToken: authentication?.idToken,
			// })
			console.log("woohoo");
		// }}

		const requestOptions = {
			// method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ authentication }),
		};
		try {
			console.log("hello")
			await fetch(
				"https://0dbe-155-33-132-46.ngrok.io/v1/login/", {
					method: "POST",
					credentials: "include",
					headers: {
						'Content-Type': 'application/json',
					  },
					body: JSON.stringify({
						credential: authentication?.idToken,
						first: decodedHeader.given_name,
						last: decodedHeader.family_name,
						email: decodedHeader.email
					}),
				// }).then((res) => {
				// 	// console.log(res.text())
				// 	return res;
				// 	console.log("res", res.json)
				// 	console.log("res", res.text())
				// 	// console.log(res.headers) // undefined
				// 	// console.log(document.cookie); // nope
				// 	// return res.json();
				  }).then((resp) => {
					console.log(resp)

				  })
				} catch (error) {
					// console.error(error);
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


{/* <GoogleButton
  disabled // can also be written as disabled={true} for clarity
  onClick={() => { console.log('this will not run on click since it is disabled') }}
/> */}


			{/* <FontAwesome.Button name="google" backgroundColor="#4285F4" style={{fontFamily: "Roboto"}} onPress={loginWithFacebook}>
        Login with Google
      </FontAwesome.Button> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
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
	}
});