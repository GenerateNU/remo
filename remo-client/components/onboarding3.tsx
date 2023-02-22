import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  NavigationContainer,
  useNavigation,
  Stack,
} from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";

export default function Onboarding3({ nextPage }) {
  const books = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const onClick = () => {
    nextPage("pagefour");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 3,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View style={styles.block}>
          <Text style={styles.question}>
            How many books will you read this year?
          </Text>
          <SelectDropdown
            data={books}
            buttonStyle={styles.dropdown}
            buttonTextStyle={styles.dropdownText}
            rowStyle={styles.dropdownRow}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={16}
                />
              );
            }}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
      </View>

      <View style={styles.next}>
        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            paddingBottom: 32,
          }}
        >
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
    width: "100%",
  },
  block: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 25,
    paddingRight: 25,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 250,
  },
  question: {
    alignItems: "center",
    fontSize: 20,
    paddingLeft: 30,
    paddingBottom: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingRight: 30,
    alignContent: "center",
    marginTop: 30,
  },
  dropdown: {
    width: "75%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },
  next: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  dropdownText: {
    color: "black",
  },
  dropdownRow: {},
  button: {
    borderRadius: 20,
    backgroundColor: "black",
  },
});
