import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  NavigationContainer,
  useNavigation,
  Stack,
} from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import Onboarding from "./onboarding";

export default function Onboarding1({ nextPage }) {
  const onClick = () => {
    nextPage("pagetwo");
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}> Onboarding 1</Text>
      <Button title="Next Page" onPress={onClick}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 25,
    paddingRight: 25,
  },
});
