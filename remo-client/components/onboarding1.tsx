import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import Onboarding from "./onboarding";

import { StringSet } from "../types";

export default function Onboarding1({ nextPage }: StringSet) {
  const onClick = () => {
    nextPage("pagetwo");
  };

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
              source={require("../public/profile-default.jpeg")}
            />
            <View
              style={{
                width: "100%",
                height: "50%",
                padding: 15,
                marginTop: 12,
                flexDirection: "column",
                justifyContent: "space-between",
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <View style={styles.columns}>
                  <Text>Name:</Text>
                </View>
                <View style={styles.columns}>
                  <Text>Gender:</Text>
                </View>
              </View>
              <Text>Grade:</Text>
              <Text>Class:</Text>
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
            title="Customize Profile"
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
    flex: 1,
  },
  button: {
    borderRadius: 20,
    backgroundColor: "black",
    marginBottom: 32,
  },
});
