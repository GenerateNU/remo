import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { StringSet } from "../types";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesome } from "@expo/vector-icons";

export default function Onboarding2({ nextPage, setPage }: String) {
  const onClick = () => {
    nextPage("pagethree");
  };
  const [preferred_name, onChangeName] = React.useState("");
  const [pronouns, onChangePronouns] = React.useState("");
  const [gender, onChangeGender] = React.useState("");
  const [ethnicity, onChangeEthnicity] = React.useState("");

  const genders: string[] = [
    "Male",
    "Female",
    "Non-Binary",
    "Other",
    "Prefer Not to Say",
  ];
  const ethnicities: string[] = [
  "White",
  "Black or African American",
  "Asian",
  "Hispanic or Latino",
  "Two or more races",
  "Native Hawaiian or Other Pacific Islander",
  "American Indian or Alaska Native",
  "Other",];

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Image
              style={styles.profile}
              source={require("../public/profile-default.jpeg")} // TODO: inherit profile image from googdata
            />
            <View
              style={{
                width: "100%",
                height: "55%",
                padding: 12,
                marginTop: 12,
                flexDirection: "column",
                justifyContent: "space-around",
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <View style={styles.columns}>
                  <Text>Preferred Name:</Text>
                </View>
                <View style={styles.textInput}>
                  <TextInput
                    onChangeText={onChangeName}
                    placeholder={"Type Preferred name here..."}
                    style={styles.input}
                    value={preferred_name}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <View style={styles.columns}>
                  <Text>Pronouns:</Text>
                </View>
                <View style={styles.textInput}>
                  <TextInput
                    onChangeText={onChangePronouns}
                    placeholder={"Add Pronouns here..."}
                    style={styles.input}
                    onChange={setPage}
                    value={pronouns}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <View style={styles.columns}>
                  <Text>Gender:</Text>
                </View>
                <View style={styles.textInput}>
                  <SelectDropdown
                    data={genders}
                    buttonTextStyle={styles.dropdown}
                    buttonStyle={styles.dropdownButton}
                    rowStyle={styles.dropdownStyle}
                    renderDropdownIcon={(isOpened) => {
                      return (
                        <FontAwesome
                          name={isOpened ? "chevron-up" : "chevron-down"}
                          color={"#444"}
                          size={14}
                        />
                      );
                    }}
                    onSelect={(selectedItem, index) => {
                      {onChangeGender}
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
                <View style={styles.columns}>
                  <Text>Ethnicity:</Text>
                </View>
                <View style={styles.textInput}>
                  <SelectDropdown
                    data={ethnicities}
                    buttonTextStyle={styles.dropdown}
                    buttonStyle={styles.dropdownButton}
                    rowStyle={styles.dropdownStyle}
                    renderDropdownIcon={(isOpened) => {
                      return (
                        <FontAwesome
                          name={isOpened ? "chevron-up" : "chevron-down"}
                          color={"#444"}
                          size={14}
                        />
                      );
                    }}
                    onSelect={(selectedItem, index) => {
                      {onChangeEthnicity}
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
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            buttonStyle={styles.button}
            title="Save Profile"
            onPress={onClick}
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
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 25,
    paddingRight: 25,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: "50%",
  },
  columns: {
    flex: 3,
    flexDirection: "row",
    marginRight: 6,
  },
  textInput: {
    flex: 7,
    flexDirection: "row",
  },
  input: {
    fontSize: 12,
    paddingLeft: 6,
    paddingTop: 2,
    width: "100%",
    paddingBottom: 2,
    borderColor: "black",
    borderWidth: 1,
  },
  containerInput: {
    width: "95%",
  },
  dropdown: {
    fontSize: 12,
    padding: 2,
  },
  dropdownButton: {
    backgroundColor: "white",
    height: 26,
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
  },
  dropdownStyle: {
    height: 26,
    width: "150%",
    fontSize: 12,
  },
  button: {
    borderRadius: 20,
    backgroundColor: "black",
    marginBottom: 32,
  },
});
