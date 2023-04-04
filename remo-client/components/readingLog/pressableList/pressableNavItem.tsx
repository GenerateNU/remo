import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function PressableNavItem({ item, setters, pageTo }) {
  const navigateNext = () => {
    setters.page(pageTo);
  };
  return (
    <Pressable onPress={navigateNext}>
      <View style={styles.item}>
        <Text style={styles.text}>{item}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    fontWeight: "300",
  },
});
