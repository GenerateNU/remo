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
import NoTimerEntry from "../components/readingLog/screens/prevReadingPageTime";
import NavBar from "../components/Navbar/navbar";
import { Button } from "@rneui/themed";

export default function ReadingLogFlow({ navigation }) {
  const route = useRoute();
  const data = route.params?.data;
  console.log(data);
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

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000) / 60.0;
  let mins: number = minutes + seconds;
  mins = Number(mins.toPrecision(3));

  const responseMap = new Map([
    ["Thoughts & Feelings", 1],
    ["Summary", 2],
    ["Lift-a-line", 3],
    ["N&N Signposts", 4],
    ["Strategies", 5],
    ["Author's Craft", 6],
    ["NO RESPONSE", 7],
  ]);

  const checkInMap = new Map([
    ["Things are going well with my book.", 1],
    ["I don’t like this book, and want to abandon it", 2],
    ["I will be finished with my book soon.", 3],
    ["I want to talk to you about my book.", 4],
    ["I am finished with my book.", 5],
    ["I’m confused and I need help.", 6],
  ]);

  const postInfo = {
    book_id: data.isbn_13,
    user_id: data.user_id,
    total_pages: endPage - startPage,
    total_time: "" + mins,
    check_in: checkInMap.get(going),
    response_type: responseMap.get(responseType),
    response: summary,
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    console.log(page);
  }, [page]);

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
      <View style={styles.padding}>
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
              noTimer: <NoTimerEntry setters={setters} states={states} />,
              postTimer: (
                <PostReadingLogPage setters={setters} states={states} />
              ),
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
      <View style={styles.navBar}>
        <NavBar navigation={navigation} data={data} />
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
  navBar: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  padding: {
    flex: 7,
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
