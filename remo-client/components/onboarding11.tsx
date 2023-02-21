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

export default function Onboarding11({ nextPage }) {
  const [selected, setSelected] = useState(false);

  const onClick = () => {
    nextPage("pagetwelve");
  };

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.question}>
          What are your biggest obstacles for reading?
        </Text>
        <ScrollView>
          <View
            style={{
              alignContent: "space-around",
              flexDirection: "row",
              paddingBottom: 15,
              paddingRight: 15,
              paddingLeft: 15,
            }}
          >
            <Pressable style={styles.option}>
              <Text style={styles.text}>{"Book topics"}</Text>
            </Pressable>
            <Pressable style={styles.option}>
              <Text style={styles.text}>{"Book access"}</Text>
            </Pressable>
          </View>
          <View
            style={{
              alignContent: "space-around",
              flexDirection: "row",
              paddingBottom: 15,
              paddingRight: 15,
              paddingLeft: 15,
            }}
          >
            <Pressable style={styles.option}>
              <Text style={styles.text}>{"Time"}</Text>
            </Pressable>
            <Pressable style={styles.option}>
              <Text style={styles.text}>{"Motivation"}</Text>
            </Pressable>
          </View>
          <View
            style={{
              alignContent: "space-around",
              flexDirection: "row",
              paddingBottom: 15,
              paddingRight: 15,
              paddingLeft: 15,
            }}
          >
            <Pressable style={styles.option}>
              <Text style={styles.text}>{"Disability"}</Text>
            </Pressable>
            <Pressable style={styles.option}>
              <Text style={styles.text}>{"Other"}</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <View style={styles.next}>
        <Button title="Next Question" color="black"></Button>
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
    paddingLeft: 25,
    paddingRight: 25,
  },
  block: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: "column",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 100,
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
    marginTop: 30,
  },
  option: {
    width: "41%",
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
    fontSize: 8,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 0,
    paddingRight: 0,
  },
  next: {
    flex: 1,
    justifyContent: "flex-end",
    paddingLeft: 100,
    marginBottom: 80,
  },
});
