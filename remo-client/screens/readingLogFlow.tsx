import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
} from "react-native";
import { findUserBooks } from "../services/book-services";
import TimerPage from "../components/readingLog/screens/timerPage";
import PostReadingLogPage from "../components/readingLog/screens/postRLogPage";
import ReadingLogDisplayPage from "../components/readingLog/screens/rLogDisplayPage";

export default function ReadingLogFlow({ navigation }) {
  const route = useRoute();
  const data = route.params?.data;
  const bookTitle = data.title;

  const [page, setPage] = useState("timerPage");
  const [time, setTime] = useState(0);
  const [text, setText] = useState("");
  const [startPage, setStartPage] = useState("");
  const [endPage, setEndPage] = useState("");

  const setters = {
    time: setTime,
    page: setPage,
    text: setText,
    startPage: setStartPage,
    endPage: setEndPage,
  };

  const states = {
    time: time,
    page: page,
    text: text,
    startPage: startPage,
    endPage: endPage,
  };

  const newData = {
    ...data,
    time: time,
  };

  return (
    <View>
      {
        {
          timerPage: <TimerPage setters={setters} />,
          postTimer: <PostReadingLogPage setters={setters} states={states} />,
          displayPage: <ReadingLogDisplayPage states={states} />,
        }[page]
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 0,
    borderBottomColor: "#ccc",
    marginBottom: 5,
  },
  header_title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 7,
  },
  count: {
    fontSize: 18,
  },
  book: {
    width: "48%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
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
  selectedBook: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  selectedTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  selectedAuthor: {
    fontSize: 20,
  },
  selectedIsbn: {
    fontSize: 24,
    fontWeight: "bold",
  },
  selectedSynopsis: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "black",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
