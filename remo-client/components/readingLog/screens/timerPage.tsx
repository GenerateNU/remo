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

export default function TimerPage({ setters, states, stopTimer }) {
  const route = useRoute();
  const data = route.params?.data;
  const title = data.title;

  const onStopPress = () => {
    setters.time(states.time);
    setters.page("postTimer");
  };
  useEffect(() => {}, []);

  const formatTime = (timeInMs: number) => {
    const minutes = Math.floor(timeInMs / 60000);
    const seconds = Math.floor((timeInMs % 60000) / 1000);
    const milliseconds = timeInMs % 1000;

    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = seconds.toString().padStart(2, "0");
    const paddedMilliseconds = milliseconds.toString().padStart(3, "0");

    return `${paddedMinutes}:${paddedSeconds}.${paddedMilliseconds}`;
  };

  const handleStop = () => {
    Alert.alert(
      "Stop Timer",
      "Are you sure you want to stop reading?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          onPress: () => {
            setters.isRunning(false);
            clearInterval(states.timerRef.current);
            onStopPress();
          },
        },
      ],
      { cancelable: false }
    );
  };

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  const handlePause = () => {
    states.isRunning(false);
    clearInterval(states.timerRef.current);
  };

  const keyHandles = ({ nativeEvent }) => {
    if (nativeEvent.key === "Enter") {
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subheader}>
        <Text style={styles.note}>Notes:</Text>
        <Text style={styles.timer}>{formatTime(states.time)}</Text>
      </View>
      <ScrollView>
        <View style={styles.textBox}>
          <TextInput
            style={styles.input}
            value={states.text}
            maxLength={200}
            multiline={true}
            onChangeText={setters.text}
            placeholder="Enter text"
            onKeyPress={keyHandles}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        {states.isRunning && (
          <Button buttonStyle={styles.button} onPress={stopTimer}>
            STOP READING
          </Button>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timer_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  timer: {
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
  textBox: {
    flex: 4,
    flexDirection: "column",
    height: 300,
    justifyContent: "flex-start",
  },
  buttonContainer: {
    marginTop: 8,
    flex: 3,
  },
  subheader: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
  },
  header_title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header_data: {
    fontSize: 18,
    fontWeight: "100",
    // fontWeight: 'bold',
  },
  count: {
    fontSize: 18,
  },
  book: {
    width: "22%",
    marginBottom: 5,
    borderWidth: 5,
    borderColor: "#ccc",
    padding: 1,
  },
  selected: {
    borderColor: "blue",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "black",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  input_container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    height: 300,
    borderWidth: 1,
    borderColor: "black",
    textAlignVertical: "top",
    padding: 20,
    paddingTop: 10,
    borderRadius: 20,
  },
  note: {
    fontSize: 18,
    // fontWeight: 'bold',
  },
});
