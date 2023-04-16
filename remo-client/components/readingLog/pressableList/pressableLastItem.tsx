import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

export default function PressableLastItem({ item, setter, state }) {
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
    height: "100%",
    borderWidth: 1,
    borderColor: "#954A98",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 16,
    flex: 1,
    textAlign: "center",
    flexWrap: "wrap",
    fontWeight: "300",
  },
  unpressedText: {
    color: "black",
  },
  pressedText: {
    color: "white",
  },
});
