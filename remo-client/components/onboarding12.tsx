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
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StringSet } from "../types";
import PressableCard from "./pressablecard/pressablecard";
import { Button } from "@rneui/themed";

export default function Onboarding12({ nextPage, data }) {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          alignItems: "center",
          paddingBottom: 50,
        }}
      >
        All Done!
      </Text>
      <Image
        style={{
          marginBottom: 50,
          width: 180,
          height: 180,
          borderRadius: "50%",
        }}
        source={{ uri: data.image }}
      />
      <Button
        title="View Profile"
        type="outline"
        buttonStyle={styles.button}
        titleStyle={{ color: "black" }}
        onPress={nextPage}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
  },
  next: {
    flex: 1,
    justifyContent: "flex-end",
    paddingLeft: 100,
    marginBottom: 80,
  },
  button: {
    borderRadius: 20,
    width: "100%",
    borderColor: "black",
  },
});
