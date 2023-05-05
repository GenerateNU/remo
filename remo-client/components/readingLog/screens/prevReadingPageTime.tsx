import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import BottomButtons from "../botButtons/bottomButtons";
import { NumberProp } from "react-native-svg";
import { Button } from "@rneui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import TimeModal from "../timeModal/timeModal";

export default function NoTimerEntry({ setters, states }) {
  const route = useRoute();
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  useEffect(() => {
    const startMilli = Number(startTime);
    const endMilli = Number(endTime);
    setters.time(endMilli - startMilli);
  }, [startTime, endTime]);

  const data = route.params?.data;
  console.log("--------------------------------");
  console.log(data);
  const [timeSpent, setTimeSpent] = useState("totalTime"); // totalTime, startEnd

  const minutes = Math.floor(states.time / 60000);
  const seconds = Math.floor((states.time % 60000) / 1000) / 60.0;
  let mins: number = minutes + seconds;
  mins = Math.floor(mins) + Number((mins % 1).toPrecision(1));

  useEffect(() => {
    console.log(data);
    console.log(states.endPage - states.startPage);
    console.log(mins);
    console.log((states.endPage - states.startPage) / mins);
  }, []);

  const clearTime = (timeModel: string) => {
    setters.time(0);
    setTimeSpent(timeModel);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ScrollView>
          <Text style={styles.boldText}>Your Time Spent</Text>
          {timeSpent == "totalTime" && (
            <View>
              <ScrollView style={{ overflow: "visible" }}>
                <TextInput
                  style={styles.textInput}
                  keyboardType="numeric"
                  onChangeText={(text) => setters.time(text * 60000)}
                  value={states.time}
                />
              </ScrollView>
              <Text style={styles.partialText}>
                Input Total Minutes Spent Reading
              </Text>
              <Button
                buttonStyle={styles.button}
                onPress={() => clearTime("startEnd")}
              >
                INPUT TIME FRAME
              </Button>
            </View>
          )}
          {timeSpent != "totalTime" && (
            <View>
              <TimeModal state={startTime} setter={setStartTime} />
              <Text style={styles.partialText}>Start Time</Text>
              <TimeModal state={endTime} setter={setEndTime} />
              <Text style={styles.partialText}>End Time</Text>
              <Button
                buttonStyle={styles.button}
                onPress={() => clearTime("totalTime")}
              >
                INPUT TOTAL MINUTES
              </Button>
            </View>
          )}
          {}
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
            <View style={{ width: "48%" }}>
              <View style={styles.row}>
                <Text style={[styles.timer, styles.bold]}>
                  {states.endPage - states.startPage}
                </Text>
                <View>
                  <Text style={styles.timer}>pages</Text>
                </View>
              </View>
            </View>
            <View style={{ width: "48%" }}>
              <View style={styles.row}>
                <View>
                  <Text style={[styles.timer, styles.bold]}>{mins}</Text>
                </View>
                <View>
                  <Text style={styles.timer}>minutes</Text>
                </View>
              </View>
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
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  partialText: {
    color: "121212",
    opacity: 0.5,
    fontSize: 16,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    padding: 10,
    borderColor: "#954A98",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bot: {
    flex: 1,
    justifyContent: "center",
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    padding: 18,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  warningText: {
    paddingHorizontal: 20,
    color: "red",
    textAlign: "center",
  },
  outer: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    fontSize: 16,
    fontWeight: "300",
    marginHorizontal: 2,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#954A98",
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
    backgroundColor: "#954A98",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
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
    backgroundColor: "white",
    width: 110,
    height: 50,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
