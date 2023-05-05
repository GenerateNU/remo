import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BookTop({ bookTitle }) {
  return (
    <View style={styles.bookSection}>
      <View style={styles.header}>
        <Text style={styles.header_title}>Book Title:</Text>
      </View>
      <View style={styles.subheader}>
        <Text style={styles.header_data}>{bookTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookSection: {
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 7,
    // borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  subheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#ccc",
  },
  header_title: {
    fontSize: 20,
    color: "#65298B",
    fontWeight: "bold",
  },
  header_data: {
    fontSize: 18,
    fontWeight: "200",
  },
});
