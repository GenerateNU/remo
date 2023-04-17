import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PressableNavItem from "./pressableNavItem";
import PressableLastItem from "./pressableLastItem";

export default function PressableGrid({ list, setter, state, lastVal }) {
  return (
    <View style={styles.list_container}>
      {list.map((item: string) => (
        <View style={styles.item}>
          <PressableNavItem item={item} setter={setter} state={state} />
        </View>
      ))}
      <View style={styles.itemLast}>
        <PressableLastItem item={lastVal} setter={setter} state={state} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  item: {
    width: "48%",
    height: 80,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 25,
  },
  itemLast: {
    width: "100%",
    height: 30,
    flexDirection: "column",
    justifyContent: "center",
  },
});
