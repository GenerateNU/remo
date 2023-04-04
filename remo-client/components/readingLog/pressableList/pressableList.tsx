import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PressableNavItem from "./pressableNavItem";

export default function PressableList({ list, setters, pageTo }) {
  return (
    <View style={styles.list_container}>
      {list.map((item: string) => (
        <PressableNavItem item={item} setters={setters} pageTo={pageTo} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list_container: {
    flexDirection: "column",
    width: "100%",
  },
});
