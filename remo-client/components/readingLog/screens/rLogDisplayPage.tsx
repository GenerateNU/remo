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

export default function ReadingLogDisplayPage({ states, title }) {
  const route = useRoute();

  const data = route.params?.data;

  useEffect(() => {
    console.log(data);
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
      <View>
        <Text style={styles.header_title}>Log Summary:</Text>
        <Summery title={"Book Title;"} note={title} />
        <Summery title={"Minutes Read;"} note={minsDisplay} />
        <Summery title={"Pages Read;"} note={pagesDisplay} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "lightyellow",
    paddingTop: 12,
  },
  header_title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
