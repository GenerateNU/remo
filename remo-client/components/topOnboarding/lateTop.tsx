import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Button } from "@rneui/themed";

import { StringSetter } from "../../types";

export default function LateTop({ page, setPage }: StringSetter) {
  const onClick = () => {
    if (page === "pagethree") {
      setPage("pageone");
    } else if (page === "pagefour") {
      setPage("pagethree");
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={onClick}></Button>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}> REMO</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
