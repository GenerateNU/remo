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
    } else if (page === "pagefive") {
      setPage("pagefour");
    } else if (page === "pagesix") {
      setPage("pagefive");
    } else if (page === "pageseven") {
      setPage("pagesix");
    } else if (page === "pageeight") {
      setPage("pageseven");
    } else if (page === "pagenine") {
      setPage("pageeight");
    } else if (page === "pageten") {
      setPage("pagenine");
    } else if (page === "pageeleven") {
      setPage("pageten");
    } else if (page === "pagetwelve") {
      setPage("pageeleven");
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
