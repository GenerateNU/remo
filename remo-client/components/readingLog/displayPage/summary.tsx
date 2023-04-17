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
        <Text style={[styles.bold, styles.width]}>{title}</Text>
        <Text style={styles.width}>{note}</Text>
      </View>
      <View>
        <Button
          type={"outline"}
          titleStyle={{ color: "#954A98" }}
          buttonStyle={[styles.button, { backgroundColor: "white" }]}
        >
          Edit
        </Button>
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
    marginBottom: 20,
  },
  left: {
    flex: 3,
  },
  right: {
    flex: 2,
  },
  bold: {
    fontWeight: "bold",
    color: "#65298B",
    fontSize: 20,
  },
  button: {
    width: 100,
    borderRadius: 8,
    color: "#954A98",
    shadowColor: "#D9D9D9",
    shadowRadius: 8,
    shadowOffset: { width: 4, height: 20 },
    shadowOpacity: 0.6,
  },
  width: {
    width: "70%",
  },
});
