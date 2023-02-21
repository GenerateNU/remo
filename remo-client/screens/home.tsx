import { StatusBar } from "expo-status-bar";
import React from "react";
import BarcodeScanner from "./barcodeScanner";
import Onboarding from "../components/onboarding";
import {
  NavigationContainer,
  useNavigation,
  Stack,
} from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("BarcodeScanner");
  };

  const googlePressHandler = () => {
      navigation.navigate('GoogleSSO')
  }

  const profilePressHandler = () => {
    navigation.navigate('Profile')
}

const onboardingPressHandler = () => {
  navigation.navigate('Onboarding4')
}

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Scan a Book" onPress={pressHandler}></Button>
      <Button title="View Profile" onPress={profilePressHandler}></Button>
      <Button title="Onboarding" onPress={onboardingPressHandler}></Button>
      <Button title="Google SSO" color="black" onPress={googlePressHandler}></Button>
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
});
