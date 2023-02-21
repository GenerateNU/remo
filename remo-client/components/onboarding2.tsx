import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import Onboarding from "./onboarding";
import { StringSet } from "../types";

export default function Onboarding2({ nextPage }: StringSet) {
  const onClick = () => {
    nextPage("pagethree");
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}> Onboard 2</Text>
      <Button title="Next Page" color="black" onPress={onClick}></Button>
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
