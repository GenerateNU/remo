import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { findUserBooks } from "../services/book-services";
import TimerPage from "../components/readingLog/screens/timerPage";
import PostReadingLogPage from "../components/readingLog/screens/postRLogPage";
import ReadingLogDisplayPage from "../components/readingLog/screens/rLogDisplayPage";
import BookTop from "../components/readingLog/bookTop/bookTop";
import SelectResponse from "../components/readingLog/screens/selectResponseType";
import AddSummary from "../components/readingLog/screens/addSummary";

export default function ReadingLogFlow({ navigation }) {
  const route = useRoute();
  const data = route.params?.data;
  const bookTitle = data.title;

  const [page, setPage] = useState("timerPage");
  const [time, setTime] = useState(0);
  const [text, setText] = useState("");
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(0);
  const [responseType, setResponseType] = useState("");
  const [going, setGoing] = useState("");
  const [summary, setSummary] = useState("");

  const setters = {
    time: setTime,
    page: setPage,
    text: setText,
    startPage: setStartPage,
    endPage: setEndPage,
    responseType: setResponseType,
    going: setGoing,
    summary: setSummary,
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
  };

  const newData = {
    ...data,
    time: time,
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <BookTop bookTitle={data.title} />
      </View>
      <View style={styles.bottomSection}>
        {
          {
            timerPage: <TimerPage setters={setters} states={states} />,
            postTimer: <PostReadingLogPage setters={setters} states={states} />,
            selectResponse: (
              <SelectResponse setters={setters} states={states} />
            ),
            addSummary: <AddSummary setters={setters} states={states} />,
            displayPage: <ReadingLogDisplayPage states={states} />,
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
