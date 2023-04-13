import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { findUserBooks } from "../services/book-services";
import TimerPage from "../components/readingLog/screens/timerPage";
import PostReadingLogPage from "../components/readingLog/screens/postRLogPage";
import ReadingLogDisplayPage from "../components/readingLog/screens/rLogDisplayPage";
import BookTop from "../components/readingLog/bookTop/bookTop";
import SelectResponse from "../components/readingLog/screens/selectResponseType";
import AddSummary from "../components/readingLog/screens/addSummary";
import SelectReadingHow from "../components/readingLog/screens/readingHowGoes";
import FirstPageChoice from "../components/readingLog/screens/firstPageChoice";

export default function ReadingLogFlow({ navigation }) {
  const route = useRoute();
  const data = route.params?.data;
  const bookTitle = data.title;

  const [page, setPage] = useState("firstPage");
  const [time, setTime] = useState(0);
  const [text, setText] = useState("");
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(0);
  const [responseType, setResponseType] = useState("");
  const [going, setGoing] = useState("");
  const [summary, setSummary] = useState("");
  const intervalRef = useRef<null | Timer>(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const onStopPress = () => {
    setters.time(states.time);
    setters.page("postTimer");
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

  const setters = {
    time: setTime,
    page: setPage,
    text: setText,
    startPage: setStartPage,
    endPage: setEndPage,
    responseType: setResponseType,
    going: setGoing,
    summary: setSummary,
    isRunning: setIsRunning,
  };

  const states = {
    time: time,
    page: page,
    text: text,
    startPage: startPage,
    endPage: endPage,
    responseType: responseType,
    going: going,
    summary: summary,
    timerRef: intervalRef,
    isRunning: isRunning,
  };

  const newData = {
    ...data,
    time: time,
  };

  return (
    <View style={styles.container}>
      {page != "displayPage" && (
        <View style={styles.topSection}>
          <BookTop bookTitle={data.title} />
        </View>
      )}
      <View style={styles.bottomSection}>
        {
          {
            firstPage: <FirstPageChoice setters={setters} states={states} />,
            timerPage: (
              <TimerPage
                setters={setters}
                states={states}
                stopTimer={handleStop}
              />
            ),
            postTimer: <PostReadingLogPage setters={setters} states={states} />,
            selectResponse: (
              <SelectResponse setters={setters} states={states} />
            ),
            addSummary: <AddSummary setters={setters} states={states} />,
            howGoes: <SelectReadingHow setters={setters} states={states} />,
            displayPage: (
              <ReadingLogDisplayPage states={states} title={data.title} />
            ),
          }[page]
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  bottomSection: {
    flex: 7,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
