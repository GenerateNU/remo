import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  NavigationContainer,
  useNavigation,
  Stack,
} from "@react-navigation/native";
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

export default function Onboarding4({ nextPage }) {
  const [selected, setSelected] = useState(false);

  const onClick = () => {
    nextPage("pagefive");
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
          <Text style={styles.question}>What type of reading do you like?</Text>

          <View
            style={{
              alignContent: "space-around",
              flexDirection: "row",
              alignItems: "center",
              paddingBottom: 15,
            }}
          >
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "lightblue" : "white" },
                styles.option,
              ]}
            >
              <Text style={styles.text}>{"Characters and their stories"}</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "lightblue" : "white" },
                styles.option,
              ]}
            >
              <Text style={styles.text}>{"Facts, Figures, and Ideas"}</Text>
            </Pressable>
          </View>
          <Pressable
            style={({ pressed }) => [
              { backgroundColor: pressed ? "lightblue" : "white" },
              styles.option,
            ]}
          >
            <Text style={styles.text}>{"I like everything!"}</Text>
          </Pressable>
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
    paddingBottom: 25,
    fontWeight: "bold",
    textAlign: "center",
    alignContent: "center",
    marginTop: 20,
  },
  option: {
    width: "35%",
    height: 100,
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
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  next: {
    flex: 3,
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
