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
} from "react-native";

export default function TimerPage({ setters, states }) {
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<null | Timer>(null);

  const route = useRoute();
  const data = route.params?.data;
  const title = data.title;

  const onStopPress = () => {
    setters.time(states.time);
    setters.page("postTimer");
  };
  useEffect(() => {}, []);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (timeInMs: number) => {
    const minutes = Math.floor(timeInMs / 60000);
    const seconds = Math.floor((timeInMs % 60000) / 1000);
    const milliseconds = timeInMs % 1000;

    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = seconds.toString().padStart(2, "0");
    const paddedMilliseconds = milliseconds.toString().padStart(3, "0");

    return `${paddedMinutes}:${paddedSeconds}.${paddedMilliseconds}`;
  };

  const handleStart = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setters.time((prevElapsedTime: number) => prevElapsedTime + 10);
    }, 10);
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
            setIsRunning(false);
            clearInterval(intervalRef.current);
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
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const [shiftHeld, setShiftHeld] = useState(false);
  function downHandler({ key }) {
    if (key === "Shift") {
      setShiftHeld(true);
    }
  }
  function upHandler({ key }) {
    if (key === "Shift") {
      setShiftHeld(false);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

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
      <View style={styles.buttonContainer}>
        {!isRunning && (
          <TouchableOpacity style={styles.button} onPress={handleStart}>
            <Text style={styles.buttonText}>START READING</Text>
          </TouchableOpacity>
        )}
        {isRunning && (
          <Button buttonStyle={styles.button} onPress={handleStop}>
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
