import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PressableNavItem from "./pressableNavItem";

export default function PressableList({ list, setter, state }) {
  // TODO; create the new type of pressable card
  return (
    <View style={styles.list_container}>
      {list.map((item: string) => (
        <View style={styles.item}>
          <PressableNavItem item={item} setter={setter} state={state} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list_container: {
    flexDirection: "column",
    width: "100%",
  },
  item: {
    width: "100%",
    height: 42,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
