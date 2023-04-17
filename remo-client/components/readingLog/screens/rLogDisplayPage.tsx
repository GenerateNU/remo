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
import Summery from "../displayPage/summary";
import ViewNote from "../displayPage/viewNote";
import BottomButtonsDone from "../botButtons/bottButtonsDone";

export default function ReadingLogDisplayPage({ states, title, postInfo }) {
  const route = useRoute();

  const data = route.params?.data;

  useEffect(() => {
    console.log(data);
    console.log(states.summary);
  }, []);

  const minutes = Math.floor(states.time / 60000);
  const seconds = Math.floor((states.time % 60000) / 1000) / 60.0;
  let mins: number = minutes + seconds;
  mins = Number(mins.toPrecision(3));
  const minsDisplay = mins + " minutes";

  const pages = states.endPage - states.startPage;
  const pagesDisplay = pages + " pages";

  return (
    <View style={styles.container}>
      <Text style={styles.header_title}>Log Summary:</Text>
      <View style={styles.top}>
        <Summery title={"Book Title;"} note={title} />
        <Summery title={"Minutes Read;"} note={minsDisplay} />
        <Summery title={"Pages Read;"} note={pagesDisplay} />
        <Summery title={"How's it going with your book?"} note={states.going} />
        <ViewNote
          title={"My Response;"}
          responseType={states.responseType}
          response={states.summary}
        />
      </View>
      <View style={styles.bot}>
        <BottomButtonsDone pageToGo={"Submitted"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 12,
  },
  header_title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  top: {
    paddingTop: 20,
    flex: 5,
    justifyContent: "flex-start",
    width: "100%",
  },
  bot: {
    flex: 1,
    justifyContent: "center",
  },
});
