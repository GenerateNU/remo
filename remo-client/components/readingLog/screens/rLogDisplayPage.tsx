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

export default function ReadingLogDisplayPage({ states }) {
  const route = useRoute();

  const data = route.params?.data;

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_title}>Book Title:</Text>
        </View>
        <View style={styles.subheader}>
          <Text style={styles.header_data}>{data.title}</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.header_title}>Your Time Spent:</Text>
        </View>
        <Text style={styles.timer}>{states.time}</Text>
        <View style={styles.header}>
          <Text style={styles.header_title}>Notes:</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.count}>{states.text}</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.header_title}>Pages Read:</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.count}>{states.endPage - states.startPage}</Text>
        </View>
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 7,
    // borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingRight: 100,
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
    paddingRight: 150,
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
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginRight: 10,
    fontSize: 16,
    paddingStart: 10,
  },
  page_input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    padding: 5,
    width: 50,
    fontSize: 16,
  },
});
