import { useNavigation, useRoute } from "@react-navigation/native";
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

export default function SelectResponse({ setters, states }) {
  const listResponse: string[] = [
    "THOUGHTS & FEELINGS",
    "SUMMARY",
    "LIFT-A-LINE",
    "N&N SIGNPOSTS",
    "STRATEGIES",
    "AUTHOR'S CRAFT",
    "NO RESPONSE",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <PressableList
          list={listResponse}
          setters={setters}
          pageTo={"displayPage"}
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
  top: {
    flex: 3,
    width: "100%",
  },
  bot: {
    flex: 1,
    justifyContent: "flex-start",
    paddingBottom: 60,
  },
});
