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
          pagefive: <LateTop page={page} setPage={setPage} />,
          pagesix: <LateTop page={page} setPage={setPage} />,
          pageseven: <LateTop page={page} setPage={setPage} />,
          pageeight: <LateTop page={page} setPage={setPage} />,
          pagenine: <LateTop page={page} setPage={setPage} />,
          pageten: <LateTop page={page} setPage={setPage} />,
          pageeleven: <LateTop page={page} setPage={setPage} />,
          pagetwelve: <LateTop page={page} setPage={setPage} />,
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
