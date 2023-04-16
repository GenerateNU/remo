import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";
import AfterSSO from "./afterSSO";
import { FontAwesome5 } from "@expo/vector-icons";
import jwt_decode from "jwt-decode";
import PressableCard from "../components/pressablecard/pressablecard";

// import * as WebBrowser from 'expo-web-browser';
// import { GoogleRectangularButton } from "../../../common/GoogleButton";

export default function GoogleSSO() {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.goBack();
  };
  const handleRegister = () => {
    navigation.navigate("Register");
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
<<<<<<< HEAD
        var res = await fetch(
          "https://65dc-155-33-135-36.ngrok-free.app/v1/login",
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ credential: authentication?.idToken }),
          }
        );
=======
        var res = await fetch("https://7d94-155-33-132-42.ngrok.io/v1/login", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ credential: authentication?.idToken }),
        });
>>>>>>> 9d4274d6df75da7c28bb2ce145a93f36fc4ad10f

        var text = await res.text();
        console.log("RESPONSE", text);

        const decodedHeader = jwt_decode(text);
        console.log(decodedHeader);
        const googdata = {
          // Credential: decodedHeader.Credential,
          email: decodedHeader.Email,
          firstName: decodedHeader.FirstName,
          lastName: decodedHeader.LastName,
          image: decodedHeader.Picture,
          id: decodedHeader.ID,
        };

        // NAVIGATE TO NEXT PAGE
        // TODO: add logic to check if onboarding questions have been submitted
        navigation.navigate("Profile", {
          data: googdata,
        });
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
      <Text></Text>
      <Button title="new to ReMo? register here" onPress={handleRegister} />
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
  },
  baseText: {
    font_family: "Inter",
    font_style: "normal",
    font_weight: 500,
    font_size: "4px",
    color: "#000000",
  },
  button: {
    backgroundColor: "black",
    height: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
});
