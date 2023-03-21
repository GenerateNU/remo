import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ReturnBook({ book }) {
  return (
    <View style={styles.container}>
      <Text>Return a Book </Text>
      <Button title="Return a Book" onPress={returnBook}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
