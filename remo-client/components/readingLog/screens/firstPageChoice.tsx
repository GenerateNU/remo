import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
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
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { LinearGradient } from "react-native-svg";

export default function FirstPageChoice({ setters, states }) {
  const handleStart = () => {
    setters.isRunning(true);
    states.timerRef.current = setInterval(() => {
      setters.time((prevElapsedTime: number) => prevElapsedTime + 10);
    }, 10);
    setters.page("timerPage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.timerPath}>
        <MaterialIcons
          name="timer"
          size={32}
          style={[styles.color, styles.icon]}
        />
        <Button
          titleStyle={{ color: "#954A98" }}
          type={"clear"}
          style={styles.startButton}
          onPress={handleStart}
        >
          Start Reading
        </Button>
      </View>
      <Button buttonStyle={styles.button}>
        I've Already Read for This Log
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 100,
  },
  timerPath: {
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: 12,
    alignItems: "center",
    marginBottom: 12,
    height: 150,
    borderRadius: 20,
    backgroundColor: "#E2D2EC",
  },
  button: {
    backgroundColor: "#954A98",
    borderRadius: 15,
  },
  startButton: {
    backgroundColor: "white",
    borderRadius: 15,
    width: 330,
  },
  color: {
    color: "#954A98",
  },
  icon: {
    marginBottom: 30,
  },
});
