import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";
// import * as WebBrowser from 'expo-web-browser';
// import { GoogleRectangularButton } from "../../../common/GoogleButton";

export default function GoogleSSO() {
	const navigation = useNavigation();
	const pressHandler = () => {
		navigation.goBack();
	};

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

	useEffect(() => {
		sendToBackend();
	});

	const sendToBackend = async () => {
		if (response?.type === "success") {
			const { authentication } = response;
			// an access token and id token will be returned in the authentication object
			console.log(authentication);
			console.log("woohoo");

			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ authentication }),
			};
			try {
				await fetch(
					"https://bb6f-155-33-135-49.ngrok.io/v1/login",
					requestOptions
				);
			} catch (error) {
				console.error(error);
			}
		}
	};

	return (
		<View style={styles.container}>
			<Button title="back to home screen" onPress={pressHandler} />
			<Button
				disabled={!request}
				title="Login"
				onPress={() => {
					promptAsync();
				}}
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
	},
	display: {
		position: "relative",
		top: 0,
		left: 0,
	},
});
