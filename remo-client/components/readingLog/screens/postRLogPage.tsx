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

export default function PostReadingLogPage({ setters, states }) {
  const route = useRoute();

  const data = route.params?.data;

  useEffect(() => {
    console.log(data);
  }, []);

  const onSubmitLog = () => {
    setters.page("displayPage");
  };

  const formatTime = (timeInMs: number) => {
    const minutes = Math.floor(timeInMs / 60000);
    const seconds = Math.floor((timeInMs % 60000) / 1000);

    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = seconds.toString().padStart(2, "0");

    return `${paddedMinutes}:${paddedSeconds}a`;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.page_container}>
          <View style={styles.pageContainer}>
            <Text style={styles.header_title}>Your Pages:</Text>
          </View>
        </View>

        <View style={styles.pageCont}>
          <View style={styles.input_container}>
            <TextInput
              style={styles.page_input}
              value={states.startPage}
              onChangeText={setters.startPage}
              keyboardType="numeric"
            />
            <Text style={styles.label}>Start Page:</Text>
          </View>
          <View style={styles.input_container}>
            <TextInput
              style={styles.page_input}
              value={states.endPage}
              onChangeText={setters.endPage}
              keyboardType="numeric"
            />
            <Text style={styles.label}>End Page:</Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.timer}>{states.time}</Text>
          </View>
        </View>
        <View style={styles.header}>
          <Text style={styles.header_title}>Timed Session:</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={onSubmitLog}>
          <Text style={styles.buttonText}>SUBMIT LOG</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    alignItems: "flex-start",
  },
  timer: {
    paddingVertical: 10,
    fontSize: 50,
    fontWeight: "bold",
    paddingLeft: 50,
    textAlign: "center",
    paddingBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  pageContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 3,
    alignItems: "center",
    paddingVertical: 15,
    // marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 7,
    // borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  subheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 7,
    paddingBottom: 50,
    borderBottomColor: "#ccc",
  },
  header_title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 125,
  },
  header_data: {
    fontSize: 18,
    // fontWeight: 'bold',
  },
  note: {
    fontSize: 18,
    paddingRight: 250,
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
  author: {
    fontSize: 14,
    marginBottom: 5,
  },
  isbn: {
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "black",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
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
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 10,
    flexDirection: "column",
  },
  input: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: "black",
    textAlignVertical: "top",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  page_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  pageCont: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
  },
  page_input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    padding: 5,
    width: 110,
    height: 50,
    fontSize: 16,
  },
});
