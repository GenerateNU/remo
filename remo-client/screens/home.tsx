import { StatusBar } from "expo-status-bar";
import React from "react";
import BarcodeScanner from "./barcodeScanner";
import Onboarding from "../screens/onboarding";
import {Image} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'


import {
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  const googlePressHandler = () => {
    navigation.navigate("GoogleSSO");
  };

  return (
    
    <View style={styles.container}>
      <Image
        style={{ width: 180, resizeMode: "contain" }}
        source={require("../public/Remo-Logo.png")}
      />
      <Text > I'm a . . . </Text>
      <Text> </Text>

      <FontAwesome5.Button
        style={styles.googleButton}
        name="google"
        onPress={googlePressHandler}
      >
        <Text style={styles.googleText}> Student </Text>
      </FontAwesome5.Button>
      <Text> </Text>

      <FontAwesome5.Button
        style={styles.googleButton}
        name="google"
        onPress={googlePressHandler}
        >
        <Text style={styles.googleText}> Teacher </Text>
      </FontAwesome5.Button>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  googleText: {
		color: "white",
	},
	googleButton: {
		width: 180,
		backgroundColor: "#F15a23",
  },
});
