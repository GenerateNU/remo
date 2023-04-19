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
import BottomButtons from "../botButtons/bottomButtons";
import PressableList from "../pressableList/pressableList";

export default function SelectReadingHow({ setters, states }) {
  const listResponse: string[] = [
    "Things are going well with my book.",
    "I don’t like this book, and want to abandon it",
    "I will be finished with my book soon.",
    "I want to talk to you about my book.",
    "I am finished with my book.",
    "I’m confused and I need help.",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.questionBlock}>
        <View>
          <Text style={styles.text}>How’s it going with your book?</Text>
        </View>
      </View>
      <View style={styles.top}>
        <PressableList
          list={listResponse}
          setter={setters.going}
          state={states.going}
        />
      </View>
      <View style={styles.bot}>
        <BottomButtons pageSetter={setters.page} pageToGo={"displayPage"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  questionBlock: {
    backgroundColor: "white",
    marginBottom: 18,
    borderRadius: 12,
    padding: 12,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  top: {
    flex: 3,
    width: "100%",
  },
  text: {
    fontSize: 15,
  },
  bot: {
    flex: 1,
    justifyContent: "center",
  },
});
