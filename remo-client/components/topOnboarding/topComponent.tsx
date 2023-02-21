import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

import { StringSetter } from "../../types";

import EarlyTop from "./earlyTop";
import LateTop from "./lateTop";

export default function TopComponent({ page, setPage }: StringSetter) {
  return (
    <View style={styles.container}>
      {
        {
          pageone: <EarlyTop />,
          pagetwo: <EarlyTop />,
          pagethree: <LateTop page={page} setPage={setPage} />,
          pagefour: <LateTop page={page} setPage={setPage} />,
        }[page]
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
});
