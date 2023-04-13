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

export default function PostReadingLogPage({ setters, states }) {
  const route = useRoute();

  const data = route.params?.data;

  const onSubmitLog = () => {
    setters.page("displayPage");
  };

  const formatMinutes = (timeInMs: number) => {
    const minutes = Math.floor(timeInMs / 60000);

    return `${minutes}`;
  };

  const formatSeconds = (timeInMs: number) => {
    const seconds = Math.floor((timeInMs % 60000) / 1000);

    return `${seconds}`;
  };

  const minutes = Math.floor(states.time / 60000);
  const seconds = Math.floor((states.time % 60000) / 1000) / 60.0;
  let mins: number = minutes + seconds;
  mins = Number(mins.toPrecision(3));

  useEffect(() => {
    console.log(data);
    console.log(states.endPage - states.startPage);
    console.log(mins);
    console.log((states.endPage - states.startPage) / mins);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ScrollView>
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
              <Text style={styles.label}>Start Page</Text>
            </View>
            <View style={styles.input_container}>
              <TextInput
                style={styles.page_input}
                value={states.endPage}
                onChangeText={setters.endPage}
                keyboardType="numeric"
              />
              <Text style={styles.label}>End Page</Text>
            </View>
          </View>
          {states.startPage > states.endPage && (
            <Text style={styles.warningText}>
              Please make sure the end page is greater than the start page
            </Text>
          )}
          <View style={styles.outer}>
            <View style={styles.row}>
              <View>
                <Text style={[styles.timer, styles.bold]}>
                  {states.endPage - states.startPage}
                </Text>
              </View>
              <View>
                <Text style={styles.timer}>pages</Text>
              </View>
              <View>
                <Text style={styles.timer}>in</Text>
              </View>
              <View>
                <Text style={[styles.timer, styles.bold]}>{mins}</Text>
              </View>
              <View>
                <Text style={styles.timer}>minutes</Text>
              </View>
            </View>
            <View>
              <Text>
                {Number((states.endPage - states.startPage) / mins).toPrecision(
                  3
                )}{" "}
                ppm
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bot}>
        <BottomButtons pageSetter={setters.page} pageToGo={"selectResponse"} />
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
  top: {
    flex: 5,
    width: "100%",
  },
  bot: {
    flex: 1,
    justifyContent: "center",
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
  },
  warningText: {
    paddingHorizontal: 20,
    color: "red",
    textAlign: "center",
  },
  outer: {
    width: "100%",
    borderWidth: 1,
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 12,
  },
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  timer: {
    fontSize: 20,
    fontWeight: "400",
    marginHorizontal: 2,
  },
  bold: {
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  pageContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 3,
    alignItems: "flex-start",
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
    justifyContent: "flex-start",
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
    marginBottom: 6,
    width: 110,
    height: 50,
    fontSize: 16,
  },
});
