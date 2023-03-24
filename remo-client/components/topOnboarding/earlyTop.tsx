import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";

export default function EarlyTop() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontWeight: "bold" }}> REMO</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
