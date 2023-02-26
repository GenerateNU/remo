import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Button } from "@rneui/themed";
import PressableCard from "./pressablecard/pressablecard";

export default function Onboarding5({ nextPage }) {
  const [selected, setSelected] = useState(false);

  const onClick = () => {
    nextPage("pagesix");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 5,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={styles.block}>
          <Text style={styles.question}>How often do you finish a book?</Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <PressableCard content={"Always"} />
            <PressableCard content={"Most of the time"} />
            <PressableCard content={"Sometimes"} />
            <PressableCard content={"Never"} />
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 3,
          width: "100%",
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <View style={styles.next}>
          <Button
            title="Next Question"
            onPress={onClick}
            buttonStyle={styles.button}
          ></Button>
        </View>
      </View>
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
  block: {
    backgroundColor: "white",
    flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderRadius: 20,
  },
  question: {
    alignItems: "center",
    fontSize: 20,
    paddingLeft: 50,
    paddingBottom: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingRight: 50,
    alignContent: "center",
    marginTop: 40,
  },
  option: {
    width: "70%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderHeight: 10,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    width: "50%",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  next: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 32,
  },
  button: {
    borderRadius: 20,
    backgroundColor: "black",
  },
});
