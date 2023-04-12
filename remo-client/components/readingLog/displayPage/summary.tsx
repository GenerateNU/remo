import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";

export default function Summery({ title, note }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.bold}>{title}</Text>
        <Text>{note}</Text>
      </View>
      <View>
        <Button buttonStyle={styles.button}>Edit</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12,
  },
  left: {
    flex: 3,
  },
  right: {
    flex: 2,
  },
  bold: {
    fontWeight: "bold",
  },
  button: {
    width: 100,
    borderRadius: 8,
    shadowColor: "#D9D9D9",
    shadowRadius: 8,
    shadowOffset: { width: 4, height: 20 },
    shadowOpacity: 0.6,
  },
});
