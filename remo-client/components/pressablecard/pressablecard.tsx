import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function PressableCard({ content }) {
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? "lightblue" : "white" },
        styles.option,
      ]}
    >
      <Text style={styles.text}>{content}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
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
  option: {
    width: "35%",
    height: 100,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderHeight: 10,
    borderRadius: 20,
    margin: 10,
  },
});
