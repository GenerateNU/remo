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
import PressableGrid from "../pressableList/pressableGrid";

export default function SelectResponse({ setters, states }) {
  const listResponse: string[] = [
    "Thoughts & Feelings",
    "Summary",
    "Lift-a-line",
    "N&N Signposts",
    "Strategies",
    "Author's Craft",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.questionBlock}>
          <View>
            <Text style={styles.text}>Choose the focus of your response:</Text>
          </View>
        </View>
        <PressableGrid
          list={listResponse}
          setter={setters.responseType}
          state={states.responseType}
          lastVal={"NO RESPONSE"}
        />
      </View>
      <View style={styles.bot}>
        <BottomButtons pageSetter={setters.page} pageToGo={"addSummary"} />
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
    justifyContent: "center",
  },
  questionBlock: {
    backgroundColor: "white",
    marginBottom: 18,
    borderRadius: 12,
    padding: 12,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    fontSize: 15,
  },
});
