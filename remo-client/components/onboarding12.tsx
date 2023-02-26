import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StringSet } from "../types";

export default function Onboarding11({ nextPage }: StringSet) {
  const [selected, setSelected] = useState(false);

  const onClick = () => {
    nextPage("pagetwelve");
  };

  return (
    <View style={styles.container}>
      <Text>Remo 12</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  next: {
    flex: 1,
    justifyContent: "flex-end",
    paddingLeft: 100,
    marginBottom: 80,
  },
});
