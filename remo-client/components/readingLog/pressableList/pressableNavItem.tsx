import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function PressableNavItem({ item, setter, state }) {
  const pressed = state === item;
  const selectItem = () => {
    setter(item);
  };
  return (
    <Pressable onPress={selectItem}>
      <View
        style={[
          styles.item,
          state === item ? styles.pressed : styles.unpressed,
        ]}
      >
        <Text
          style={[
            styles.text,
            state === item ? styles.pressedText : styles.unpressedText,
          ]}
        >
          {item}
        </Text>
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
  pressed: {
    backgroundColor: "#954A98",
    color: "white",
    borderWidth: 0,
  },
  unpressed: {
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: "300",
  },
  unpressedText: {
    color: "black",
  },
  pressedText: {
    color: "white",
  },
});
